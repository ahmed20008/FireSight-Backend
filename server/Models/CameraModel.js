const mongoose = require("mongoose");

const cameraSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Camera name is required"],
  },
  location: {
    type: String,
    required: [true, "Camera location is required"],
  },
  link: {
    type: String,
    required: [true, "Enter valid RTSP link"],
    unique: true,
  },
  view: {
    type: String,
    default: "null",
  },
  description: {
    type: String,
    default: "null",
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  fire_dept_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("Camera", cameraSchema);