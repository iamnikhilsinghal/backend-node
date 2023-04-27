const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: String,
  brand: String,
});

module.exports = mongoose.model("Product", dataSchema);
