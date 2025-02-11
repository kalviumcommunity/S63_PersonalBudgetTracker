require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");
const router = require("./routes"); // Import the routes
const express = require("express");

// MongoDB Connection Function
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("✅ MongoDB Connected Successfully!");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1); // Exit process on failure
    }
};

// Export the connection function
module.exports = connectDB;