const Transaction = require("../models/Transaction");

// Add a new transaction
const addTransaction = async (req, res) => {
  try {
    const { transactionName, category, transactionType, date, amount } =
      req.body;

    // Create and save the transaction
    const newTransaction = new Transaction({
      transactionName,
      category,
      transactionType,
      date,
      amount,
    });

    await newTransaction.save();
    res.status(201).json({ message: "Transaction added successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error adding transaction.", error });
  }
};

// Get all transactions
const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching transactions.", error });
  }
};

module.exports = { addTransaction, getTransactions };
