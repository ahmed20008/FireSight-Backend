const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  event_pic: {
    type: String,
  },
  event_clip: {
    type: String,
  },
  event_data: {
    class: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  camera_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Event", eventSchema);