const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const dotenv = require('dotenv');

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('/etc/letsencrypt/live/helpo.site/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/helpo.site/fullchain.pem'),
};

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const mongoDBString = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

const server = https.createServer(options, app);



// Connect to MongoDB
mongoose.connect(mongoDBString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.log('MongoDB connection error:', error));


// Define routes and middleware
server.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});



// Add this to server.js

app.get('/', async (req, res) => {
    res.send('Welcome to the Helpo API!');

});

app.use('/api/auth', authRoutes);

