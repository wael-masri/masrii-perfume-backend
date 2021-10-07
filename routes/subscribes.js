const router = require("express").Router();
const Post = require("../models/Post");
const Subscribe = require("../models/Subscribe");

//ADD subscribe
router.post("/add", async (req, res) => {
  try {
    const newsub = new Subscribe({
      email: req.body.email,
    });
    const subscribe = await newsub.save();
    res.status(200).json(subscribe);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE SUBSCRIBE
router.delete("/:id", async (req, res) => {
  try {
    await Subscribe.findByIdAndDelete(req.params.id);
    res.status(200).json("subscribe has been deleted ..");
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL SUBSCRIBES
router.get("/", async (req, res) => {
  try {
    const subscribe = await Subscribe.find();

    res.status(200).json(subscribe);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
