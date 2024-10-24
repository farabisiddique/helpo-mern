const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoDBString = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


// Connect to MongoDB
mongoose.connect(mongoDBString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));


// Define routes and middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// Add this to server.js

app.get('/', async (req, res) => {
    // res.send(mongoDBString); 
    mongoose.connect(mongoDBString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => res.send('Connected to MongoDB'))
    .catch((error) => res.send('MongoDB connection error:', error));
});

app.use('/api/auth', authRoutes);

