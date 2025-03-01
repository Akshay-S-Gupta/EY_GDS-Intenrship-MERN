const mongoose = require('mongoose');
const { mongoURI } = require('./config/dbconfig');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('MongoDB Connected');
  } catch (err) {
    console.error('MongoDB Connection Error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;