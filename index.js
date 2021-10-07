const express = require("express");
const app = express();

const mongoose = require("mongoose");
const usersRoute = require("./routes/users");
const categoriesRoute = require("./routes/categories");
const postsRoute = require("./routes/posts");
const ordersRoute = require("./routes/orders");
const subscribesRoute = require("./routes/subscribes");
const messagesRoute = require("./routes/messages");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config({ path: "./config.env" });


// HERE FOR CONNECT TO LOCALHOST 3000 WITHOUT PROBLEMS
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
//FOR CONNECTION WITH DATA BASE MONGO DB 
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(console.log("connected.."))
  .catch((err) => {
    console.log(err);
  });

//DEFENITION UPLOAD IMAGES IN FOLDER IMAGES
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

//FOR DOWNLOAD IMAGES AND PUT IN FOLDER
const upload = multer({ storage: storage });

// FOR UPLOAD IAMGES BY PATH
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file has been uploaded..");
});

// here delete image in folder images (SERVER)
app.delete("/api/:name", (req, res) => {
  try {
    fs.unlinkSync("./Images/" + req.params.name);
   
  } catch (err) {
    console.error(err);
  }
});

//end upload


//PATHES FOR REST API 
app.use("/api/users", usersRoute);
app.use("/api/categories", categoriesRoute);
app.use("/api/posts", postsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/subscribes", subscribesRoute);
app.use("/api/messages", messagesRoute);

// serve static assets if in production
if(process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname,'/client/build')));
  app.use(express.static(path.join(__dirname,'/Images')));

 app.get('*', (req,res) => {
   res.sendFile(path.join(__dirname,'client', 'build', 'index.html'));
 })

}else{
  app.get('/',(req,res) => {
     res.send('api running');
  })
}


// BACKEND RUNMIN IN POST 5000 HERE
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Backend is running.. ${port}`);
});
