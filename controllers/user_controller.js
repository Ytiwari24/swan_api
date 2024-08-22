const User = require('../models/user_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { name, email, mobile_no, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({ name, email, mobile_no, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '30d',
    });

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      mobile_no: user.mobile_no,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
      });

      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token,
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const User = require('../models/user_model');
// const bcrypt = require('bcryptjs');

// Update user profile
exports.updateUser = async (req, res) => {
  const { name, email, mobile_no, password } = req.body;
  const userId = req.user._id;  // The ID of the user from the token

  try {
    const updateFields = { name, email, mobile_no };

    if (password) {
      // Hash the new password before saving
      updateFields.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true }).select('-password');

    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ "success": true, "message": "User Updated Successfully...!!!", "data": updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



// Get user data with token verification
exports.getUserData = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({
      "success": true, "message": "User Data Retrive Successfully...!!!", "data": {
        _id: user._id,
        name: user.name,
        email: user.email,
        mobile_no: user.mobile_no,
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};