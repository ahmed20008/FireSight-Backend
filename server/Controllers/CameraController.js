const Camera = require("../Models/CameraModel");
const User = require("../Models/UserModel");
const { verifyToken } = require("../util/SecretToken");

module.exports.AddCamera = async (req, res) => {
  try {
    const { name, location, link, view, description, createdAt } = req.body;
    // const user_token = req.cookies.token;
    const { token } = req.body;
    const check_user = verifyToken(token);
    if (!check_user) {
      return res.status(404).json({ error: "No token found!" });
    }
    const user = await User.findById(check_user.id).select('email name');

    const existingCamera = await Camera.findOne({ link });
    if (existingCamera) {
      return res.status(201).json({ message: "Camera link already exists" });
    }

    await Camera.create({
      name, location, link, view, description, createdAt,
      user: {
        id: user._id,
        email: user.email,
        name: user.name
      }
    });

    res
      .status(201)
      .json({ message: "Camera added successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getAllCameras = async (req, res) => {
  try {
    const cameras = await Camera.find();
    res.status(200).json({ cameras });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getCameras = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    } else {
      const cameras = await Camera.find({ 'user.id': _id });
      res.status(200).json({ cameras });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteCamera = async (req, res) => {
  try {
    const { _id } = req.params;
    const camera = await Camera.findById(_id);

    if (!camera) {
      return res.status(404).json({ error: "camera not found" });
    }
    await camera.deleteOne();

    res.status(200).json({ message: "camera deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};