const router = require("express").Router();
const Post = require("../models/Post");
const Category = require("../models/Category");
const Message = require("../models/Message");

//ADD MESSAGES
router.post("/add", async (req, res) => {
  const newMessage = new Message(req.body);

  try {
    const saveMessage = await newMessage.save();
    res.status(200).json(saveMessage);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE MESSAGES
router.delete("/:id", async (req, res) => {
  try {
    await Message.findByIdAndDelete(req.params.id);
    res.status(200).json("Message has been deleted ..");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET MESSAGES
router.get("/", async (req, res) => {
  try {
    const message = await Message.find();

    res.status(200).json(message);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
