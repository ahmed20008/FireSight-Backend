const User = require("../Models/UserModel");

module.exports.addPermissionToUser = async (req, res) => {
  try {
    const { userId, permission } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.permissions.includes(permission)) {
      return res.status(400).json({ error: "User already has this permission" });
    }

    user.permissions.push(permission);
    await user.save();

    res.status(200).json({ message: "Permission added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.removePermissionFromUser = async (req, res) => {
  try {
    const { userId, permission } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (!user.permissions.includes(permission)) {
      return res.status(400).json({ error: "User does not have this permission" });
    }

    user.permissions = user.permissions.filter(userPermission => userPermission !== permission);
    await user.save();

    res.status(200).json({ message: "Permission removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};