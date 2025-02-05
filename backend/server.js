

const express = require("express");
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
    res.send("MongoDB Atlas is connected to VS Code!");
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});