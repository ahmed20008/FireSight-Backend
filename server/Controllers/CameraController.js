const Camera = require("../Models/CameraModel");

module.exports.AddCamera = async (req, res) => {
  try {
    const { name, location, link, view, description, createdAt } = req.body;

    const existingCamera = await Camera.findOne({ link });
    if (existingCamera) {
      return res.json({ message: "Camera link already exists" });
    }

    await Camera.create({ name, location, link, view, description, createdAt });

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