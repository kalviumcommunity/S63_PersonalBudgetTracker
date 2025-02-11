const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // Import the MongoDB connection function
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB Atlas
connectDB();

app.use("/api", require("./routes"));  // Import and use routes

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
