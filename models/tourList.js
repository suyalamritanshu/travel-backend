const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
    date: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },


  },
  { timestamps: true }
);

module.exports = mongoose.model("List", ListSchema);