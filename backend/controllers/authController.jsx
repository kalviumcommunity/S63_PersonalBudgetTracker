const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Register User
exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    // Check if user already exists
    if (userExists) {
      return res.status(400).json({ success: false, message: 'User already exists!' });
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    if (user) {
      res.status(201).json({
        success: true,
        message: 'User registered successfully!',
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(400).json({ success: false, message: 'Invalid user data!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error in registration. Please try again!' });
  }
};

// Login User
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    // Check if user exists and password is valid
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({
        success: true,
        message: 'Login successful!',
        user: {
          _id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } else {
      res.status(401).json({ success: false, message: 'Invalid email or password!' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error in login. Please try again!' });
  }
};
