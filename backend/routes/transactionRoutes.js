const express = require("express");
const {
  addTransaction,
  getTransactions,
} = require("../controllers/transactionController");

const router = express.Router();

// POST - Add new transaction
router.post("/add", addTransaction);

// GET - Get all transactions
router.get("/all", getTransactions);

module.exports = router;
