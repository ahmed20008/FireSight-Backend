const Support = require("../Models/SupportModel");

module.exports.AddSupport = async (req, res) => {
  const { user_id, category, subject, message, createdAt } = req.body;

  try {
    await Support.create({
      user_id, category, subject, message, createdAt
    });

    res
      .status(201)
      .json({ message: "Query sended successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getAllSupport = async (req, res) => {
  try {
    const support = await Support.find();
    res.status(200).json({ support });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};