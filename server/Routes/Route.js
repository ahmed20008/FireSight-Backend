const { Login, SignUp, AddUser, ForgotPassword, UpdatePassword, getAllUsers, deleteUser, currentUser, Logout, UpdateUser } = require("../Controllers/AuthController");
const { addPermissionToUser, removePermissionFromUser } = require("../Controllers/PermissionController");
const { AddCamera, getAllCameras, getCameras, deleteCamera } = require("../Controllers/CameraController");
const { AddEvent, getAllEvents, getEvents, eventVerify } = require("../Controllers/EventController");
const router = require("express").Router();

router.post("/add-user", AddUser);
router.post("/signup", SignUp);
router.post('/login', Login);
router.post('/forget-password', ForgotPassword);
router.post('/update-password/:_id/:token', UpdatePassword);
router.get('/all-users', getAllUsers);
router.delete("/delete-user/:_id", deleteUser);
router.get('/me', currentUser);
router.post('/logout', Logout);
router.put('/update-user/:_id', UpdateUser);

router.post("/add-permission", addPermissionToUser);
router.post("/remove-permission", removePermissionFromUser);

router.post("/add-camera", AddCamera);
router.get("/all-camera/:_id", getCameras);
router.get("/all-camera", getAllCameras);
router.delete("/delete-camera/:_id", deleteCamera);

router.post("/add-event", AddEvent);
router.get("/all-events", getAllEvents);
router.get("/event/:_id", getEvents);
router.put("/event-check/:_id", eventVerify);

module.exports = router;