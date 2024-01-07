const Event = require("../Models/EventModal");
const User = require("../Models/UserModel");

module.exports.AddEvent = async (req, res) => {
  const { event_pic, event_clip, event_data, user_id, camera_id, fire_dept_id, createdAt } = req.body;

  try {
    await Event.create({
      event_pic, event_clip, event_data, user_id, camera_id, fire_dept_id, createdAt
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

module.exports.getEvents = async (req, res) => {
  const { _id } = req.params;

  try {
    const events = await Event.find({
      $or: [
        { user_id: _id },
        { fire_dept_id: _id },
      ],
    });

    if (!events) {
      return res.status(404).json({ error: "no event found" });
    }

    res.status(200).json({ events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.eventVerify = async (req, res) => {
  const { _id } = req.params;
  const { event_check } = req.body;

  const event = await Event.findById(_id);
  if (!event) {
    return res.status(404).json({ error: 'Event not found' });
  }

  try {
    const updateFields = { event_check };

    const updatedEvent = await Event.findOneAndUpdate({ _id }, updateFields, { new: true, runValidators: true });

    if (!updatedEvent) {
      return res.status(500).json({ message: "Failed to update event" });
    }

    res.status(200).json({ message: "Event updated successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};