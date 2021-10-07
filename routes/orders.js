const router = require("express").Router();
const Order = require("../models/Order");

//CREATE ORDER
router.post("/add", async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const saveOrder = await newOrder.save();
    res.status(200).json(saveOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE ORDER
router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    await order.delete();
    res.status(200).json("post has been deleted");
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL orderS
router.get("/get", async (req, res) => {
  try {
    const order = await Order.find();

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ALL order by condition
router.get("/", async (req, res) => {
  try {
    const order = await Order.find({ user_id: req.query.user_id });

    res.status(200).json(order);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
