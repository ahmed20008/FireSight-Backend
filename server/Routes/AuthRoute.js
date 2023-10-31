const { Login, Signup, ForgotPassword, UpdatePassword } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post('/login', Login);
router.post('/forget-password', ForgotPassword);
router.post('/update-password/:_id/:token', UpdatePassword);

module.exports = router;