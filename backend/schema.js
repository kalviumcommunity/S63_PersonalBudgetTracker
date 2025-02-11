const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["income", "expense"], // Ensures only these values are allowed
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);
module.exports = Transaction;
