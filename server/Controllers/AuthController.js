const User = require("../Models/UserModel");
const { createSecretToken, createResetToken, verifyResetToken, verifyToken } = require("../util/SecretToken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

module.exports.AddUser = async (req, res, next) => {
  try {
    const { email, name, phone, permissions, address, Fire_dept_address, verified, createdAt } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, name, phone, permissions, address, Fire_dept_address, verified, createdAt });

    res
      .status(201)
      .json({ message: "User Created successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.SignUp = async (req, res, next) => {
  try {
    const { email, name, phone, address, createdAt } = req.body;

    const isAdmin = email === "fyp@admin.com";
    const permissions = isAdmin && ["admin"];

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = await User.create({ email, name, phone, permissions, address, Fire_dept_address, verified, createdAt });

    res
      .status(201)
      .json({ message: "User data sended to admin successfully", success: true });
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Incorrect password or email' })
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.status(400).json({ message: 'Incorrect password or email' })
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
          name: user.name,
          permissions: user.permissions,
          phone: user.phone,
          address: user.address,
          Fire_dept_address: user.Fire_dept_address
        }
      }
    });
    next()
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
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

module.exports.getAllUsers = async (req, res) => {
  try {
    const verifiedQuery = req.query.verified;
    const query = verifiedQuery !== undefined ? { verified: verifiedQuery === 'true' } : {};
    const users = await User.find(query).select('email name permissions phone address Fire_dept_address verified');
    res.status(200).json({ users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.deleteUser = async (req, res) => {
  try {
    const { _id } = req.params;
    const user = await User.findById(_id);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.deleteOne();

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.currentUser = async (req, res) => {
  try {
    // const user_token = req.cookies.token;
    const tokenQuery = req.query.token;
    const check_user = verifyToken(tokenQuery);
    if (!check_user) {
      return res.status(404).json({ error: "No token found!" });
    }

    const user = await User.findById(check_user.id).select('email name permissions phone address Fire_dept_address verified');
    res.status(200).json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.Logout = async (req, res) => {
  try {
    const user_token = res.clearCookie('token');
    if (!user_token) {
      return res.status(404).json({ error: "No token found!" });
    }

    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports.UpdateUser = async (req, res) => {

  const { _id } = req.params;
  const { email, name, phone, address, Fire_dept_address, verified } = req.body;

  const user = await User.findById(_id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  try {
    const updateFields = { email, name, phone, address, Fire_dept_address, verified };

    const updatedUser = await User.findOneAndUpdate({ _id }, updateFields, { new: true, runValidators: true });

    if (!updatedUser) {
      return res.status(500).json({ message: "Failed to update user" });
    }

    res.status(200).json({ message: "User updated successfully", user: updatedUser });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};