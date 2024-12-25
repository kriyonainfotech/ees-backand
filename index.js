// Load environment variables
const dotenv = require('dotenv');
dotenv.config();  // Move this to the top to load environment variables first

// Import required modules
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Connect to MongoDB
connectDB();

// Set up server port from environment or default to 8000
const port = process.env.PORT || 80;

// Set up CORS options
const corsOptions = {
    origin: ['http://3.110.168.202'], // Add your IP
    credentials: true,
};

// Use middleware
app.use(cors(corsOptions));  // Enable CORS with the specified options
app.use(express.json());  // Built-in Express JSON parser (no need for bodyParser.json())
app.use(cookieParser());  // Parse cookies
app.use(express.urlencoded({ extended: true }));  // Parse URL-encoded data

// Add a simple route to verify the server is working
app.get('/', (req, res) => {
    res.send('Hello, world!');  // Root route to test if the server is up
});

// Import routes
app.use('/', require('./routes/indexRoute'));  // Your existing route file

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`Server is running on port ${port}`);
});
