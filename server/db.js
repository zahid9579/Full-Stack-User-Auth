const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoURI = 'mongodb+srv://Zahid:Zahid12345@cluster0.4kudn.mongodb.net/userAuth?retryWrites=true&w=majority';

  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Exit the application on database connection failure
  }
};

module.exports = connectDB;
