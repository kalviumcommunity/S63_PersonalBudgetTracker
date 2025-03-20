const express = require("express");
const {
  addTransaction,
  getTransactions,
  updateTransaction,
  deleteTransaction,
} = require("../controllers/transactionController");

const router = express.Router();

// POST - Add new transaction
router.post("/add", addTransaction);

// GET - Get all transactions
router.get("/all", getTransactions);

// PUT - Update a transaction
router.put("/update/:id", updateTransaction);

// DELETE - Delete a transaction
router.delete("/delete/:id", deleteTransaction);

module.exports = router;
