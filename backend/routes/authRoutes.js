const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models'); // Import User model from models.js

const router = express.Router();
const SECRET_KEY = 'my_super_secret_123!';

// Signup Route
router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password required' });
    }

    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Signup Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Signin Route
router.post('/signin', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id, username }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Signin successful', token });
  } catch (error) {
    console.error('Signin Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;