const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Your name is required"],
  },
  password: {
    type: String,
    default: "password",
  },
  permissions: {
    type: String,
    required: [true, "Permission is required"],
  },
  phone: {
    type: Number,
    required: [true, "Phone Number is required"],
  },
  address: {
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    zipcode: {
      type: Number,
    },
  },
  fire_dept_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  verified: {
    type: String,
    default: "false",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

module.exports = mongoose.model("User", userSchema);