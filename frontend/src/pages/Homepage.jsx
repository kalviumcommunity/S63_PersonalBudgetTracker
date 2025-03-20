import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const [formData, setFormData] = useState({
    transactionName: "",
    category: "",
    transactionType: "",
    date: "",
    amount: "",
  });

  const [transactions, setTransactions] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission (Add or Update Transaction)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { transactionName, category, transactionType, date, amount } =
      formData;

    if (!transactionName || !category || !transactionType || !date || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const url = editMode
        ? `http://localhost:5000/api/transactions/update/${currentId}`
        : "http://localhost:5000/api/transactions/add";

      const method = editMode ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(editMode ? "✅ Transaction updated!" : "✅ Transaction added!");
        fetchTransactions();
        resetForm();
      } else {
        alert("❌ Error saving transaction.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("⚠️ Failed to connect to the server.");
    }
  };

  // Fetch transactions from the backend
  const fetchTransactions = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/transactions/all");
      const data = await res.json();
      setTransactions(data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  // Delete a transaction
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this transaction?")) {
      try {
        const res = await fetch(
          `http://localhost:5000/api/transactions/delete/${id}`,
          { method: "DELETE" }
        );

        if (res.ok) {
          alert("🗑️ Transaction deleted successfully!");
          fetchTransactions();
        } else {
          alert("❌ Error deleting transaction.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("⚠️ Failed to connect to the server.");
      }
    }
  };

  // Edit a transaction
  const handleEdit = (transaction) => {
    setFormData({
      transactionName: transaction.transactionName,
      category: transaction.category,
      transactionType: transaction.transactionType,
      date: new Date(transaction.date).toISOString().split("T")[0],
      amount: transaction.amount,
    });
    setEditMode(true);
    setCurrentId(transaction._id);
  };

  // Reset form after adding or updating
  const resetForm = () => {
    setFormData({
      transactionName: "",
      category: "",
      transactionType: "",
      date: "",
      amount: "",
    });
    setEditMode(false);
    setCurrentId(null);
  };

  // Format currency to INR
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Personal Budget Tracker</h2>

        {/* Transaction Form */}
        <form onSubmit={handleSubmit} className="form">
          <input
            type="text"
            name="transactionName"
            value={formData.transactionName}
            onChange={handleChange}
            placeholder="Transaction name"
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Category</option>
            <option value="Food">Food</option>
            <option value="Travel">Travel</option>
            <option value="Investment">Investment</option>
          </select>
          <select
            name="transactionType"
            value={formData.transactionType}
            onChange={handleChange}
            required
          >
            <option value="">Transaction type</option>
            <option value="DEBIT">DEBIT</option>
            <option value="CREDIT">CREDIT</option>
          </select>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Amount"
            required
          />
          <button type="submit">{editMode ? "Update" : "Save"}</button>
          {editMode && (
            <button type="button" onClick={resetForm} className="cancel-btn">
              Cancel
            </button>
          )}
        </form>

        {/* Transaction List */}
        <div className="transaction-list">
          {transactions.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Transaction Name</th>
                  <th>Category</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{new Date(transaction.date).toLocaleDateString()}</td>
                    <td>{transaction.transactionName}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.transactionType}</td>
                    <td>{formatCurrency(transaction.amount)}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(transaction)}
                        className="edit-btn"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => handleDelete(transaction._id)}
                        className="delete-btn"
                      >
                        🗑️ Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No transactions yet!</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Homepage;
