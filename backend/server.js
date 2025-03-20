const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const transactionRoutes = require("./routes/transactionRoutes"); // ✅ Import Transaction Routes

dotenv.config();
const app = express();

// ✅ Enable CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json());

// MongoDB Connection
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected..."))
  .catch((err) => console.log("❌ MongoDB connection error:", err));

// Auth Routes
app.use("/api/auth", authRoutes);

// ✅ Transaction Routes
app.use("/api/transactions", transactionRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
