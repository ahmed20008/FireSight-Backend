const Event = require("../Models/EventModal");

module.exports.AddEvent = async (req, res) => {
  try {
    const { event_pic, event_clip, event_data, user_id, camera_id, createdAt } = req.body;

    await Event.create({
      event_pic, event_clip, event_data, user_id, camera_id, createdAt
    });

    res
      .status(201)
      .json({ message: "Event created successfully", success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};