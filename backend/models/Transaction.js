const mongoose = require("mongoose");

// Define transaction schema
const transactionSchema = new mongoose.Schema({
  transactionName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Food", "Travel", "Investment"],
  },
  transactionType: {
    type: String,
    required: true,
    enum: ["DEBIT", "CREDIT"],
  },
  date: {
    type: Date,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

// Create model
const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
