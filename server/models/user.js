const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,  // This adds createdAt and updatedAt fields
});

// Export the model
module.exports = mongoose.model('User', userSchema);
