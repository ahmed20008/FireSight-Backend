const User = require("../Models/UserModel");
const { createSecretToken, createResetToken, verifyResetToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

module.exports.Signup = async (req, res, next) => {
  try {
    const { email, password, username, createdAt } = req.body;

    const isAdmin = email === "admin@example.com";
    const permissions = isAdmin ? ["admin"] : ["user"];

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }

    const user = await User.create({ email, password, username, createdAt, permissions });

    // const token = createSecretToken(user._id);
    // res.cookie("token", token, {
    //   withCredentials: true,
    //   httpOnly: false,
    // });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect password or email' })
    }
    const token = createSecretToken(user._id);
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });
    res.status(200).json({
      message: "User logged in successfully", success: true, data: {
        "auth_token": token,
        "exp": 14 * 24 * 60 * 60,
        user: {
          username: user.username,
          permissions: user.permissions
        }
      }
    });
    next()
  } catch (error) {
    console.error(error);
  }
};

module.exports.ForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.json({ message: 'Email is required' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: 'No user found with this email' });
    }

    const resetToken = createResetToken(user._id, user.password);

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'elva.williamson@ethereal.email',
        pass: '6gmpcFm79FukpEFkR1'
      }
    });

    const resetLink = `http://localhost:4000/update-password/${user._id}/${resetToken}`;
    const mailOptions = {
      from: 'your_email@gmail.com',
      to: user.email,
      subject: 'Password Reset',
      text: `Click on the following link to reset your password: ${resetLink}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Password reset link sent to your email' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports.UpdatePassword = async (req, res) => {

  const { _id, token } = req.params;

  try {
    const user = await User.findOne({ _id });
    const { password } = req.body;
    const payload = verifyResetToken(token, user.password);
    if (payload) {
      user.password = password;
      await user.save();

      return res.status(200).json({ message: 'Password updated successfully' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};