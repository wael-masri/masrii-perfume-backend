const router = require("express").Router();
const User = require("../models/User");
const Order = require("../models/Order");
const bcrypt = require("bcryptjs");

//ADD USER (REGISTER)
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hashPass = await bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPass,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE USER
router.put("/:id", async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE password
router.put("/changepassword/:_id", async (req, res) => {
  if (req.body.password) {
    const salt = await bcrypt.genSaltSync(10);
    req.body.password = await bcrypt.hashSync(req.body.password, salt);
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    ); //hon new mn shen ybyen l jdid li n3mlou update
    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    await Order.deleteMany({ user_id: req.params.id });

    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user has been deleted ..");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USERS
router.get("/", async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET USERS by id
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN USERS 
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if(user){
      const validate = await bcrypt.compareSync(req.body.password, user.password);
      if(validate){
        res.status(200).json(user);
      }else{
        res.status(200).json({message:"wrong credentials password!"});
      }
    }else{
      res.status(200).json({message:"wrong credentials username!"});
    }
  //   !user && res.status(400).json("wrong credentials username!");
  //   const validate = await bcrypt.compare(req.body.password, user.password);
  //   !validate && res.status(400).json("wrong credentials password!");
  //   // const { password, ...others} = user;
  //   user && validate && res.status(200).json(user);
  // } catch (err) {
  //   res.status(500).json("not correctly");
  // }
  
  } catch (err) {
    res.status(500).json("not correctly");
  }
});

module.exports = router;
