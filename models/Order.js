const mongoose = require("mongoose");

const OarderSchema = new mongoose.Schema(
  {
    items: {
      type: Array,
      required: true,
    },
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    shippingorder: {
      type: String,
      required: true,
    },

    ordernotes: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OarderSchema);
