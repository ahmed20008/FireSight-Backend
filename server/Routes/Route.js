const { Login, Signup, ForgotPassword, UpdatePassword, getAllUsers, deleteUser, currentUser, Logout } = require("../Controllers/AuthController");
const { addPermissionToUser, removePermissionFromUser } = require("../Controllers/PermissionController");
const { AddCamera, getAllCameras, getCameras, deleteCamera } = require("../Controllers/CameraController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/forget-password', ForgotPassword);
router.post('/update-password/:_id/:token', UpdatePassword);
router.get('/all-users', getAllUsers);
router.delete("/delete-user/:_id", deleteUser);
router.get('/me', currentUser);
router.post('/logout', Logout);

router.post("/add-permission", addPermissionToUser);
router.post("/remove-permission", removePermissionFromUser);

router.post("/add-camera", AddCamera);
router.get("/all-camera/:_id", getCameras);
router.get("/all-camera", getAllCameras);
router.delete("/delete-camera/:_id", deleteCamera);

module.exports = router;