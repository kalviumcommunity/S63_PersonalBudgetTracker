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

// Update a transaction
const updateTransaction = async (req, res) => {
  try {
    const { id } = req.params;
    const { transactionName, category, transactionType, date, amount } =
      req.body;

    // Check if transaction exists
    const existingTransaction = await Transaction.findById(id);
    if (!existingTransaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }

    // Update transaction data
    existingTransaction.transactionName = transactionName;
    existingTransaction.category = category;
    existingTransaction.transactionType = transactionType;
    existingTransaction.date = date;
    existingTransaction.amount = amount;

    await existingTransaction.save();
    res.status(200).json({ message: "Transaction updated successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error updating transaction.", error });
  }
};

// Delete a transaction
const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if transaction exists
    const existingTransaction = await Transaction.findById(id);
    if (!existingTransaction) {
      return res.status(404).json({ message: "Transaction not found." });
    }

    await Transaction.findByIdAndDelete(id);
    res.status(200).json({ message: "Transaction deleted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting transaction.", error });
  }
};

module.exports = {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
};
