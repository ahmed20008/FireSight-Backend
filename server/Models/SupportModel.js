const mongoose = require("mongoose");

const supportSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  category: {
    type: String,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Support", supportSchema);