const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user'); // Import User model

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // Create JWT token
    const token = jwt.sign({ email: newUser.email, id: newUser._id }, 'your_jwt_secret', { expiresIn: '1h' });

    res.status(201).json({ result: newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  
  const { email, password } = req.body;

  try {
    // Find user by email
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if password matches
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'your_jwt_secret', { expiresIn: '1h' });

    // Send back user data and token
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});

// Middleware to check authentication (using JWT)
const authMiddleware = (req, res, next) => {
  console.log("Middleware");
  const token = req.headers.authorization.split(" ")[1];
  
  if (!token) return res.status(403).json({ message: "Unauthorized" });

  try {
    const decodedData = jwt.verify(token, 'your_jwt_secret');
    req.userId = decodedData?.id;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};

// Profile route
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Respond with user profile information
    res.status(200).json({ result: user });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
});
module.exports = router;
