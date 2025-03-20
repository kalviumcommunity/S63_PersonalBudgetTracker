import React, { useState, useEffect } from "react";
import "./Homepage.css";
import Navbar from "../components/Navbar";

const Homepage = () => {
  // State for form and transactions
  const [formData, setFormData] = useState({
    transactionName: "",
    category: "",
    transactionType: "",
    date: "",
    amount: "",
  });

  const [transactions, setTransactions] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { transactionName, category, transactionType, date, amount } =
      formData;

    if (!transactionName || !category || !transactionType || !date || !amount) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/transactions/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("✅ Transaction saved successfully!");
        fetchTransactions(); // Reload transactions after adding
        setFormData({
          transactionName: "",
          category: "",
          transactionType: "",
          date: "",
          amount: "",
        });
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

  // Format currency to INR
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Fetch transactions on component load
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <>
      {/* Navbar at the top */}
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
          <button type="submit">Save</button>
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
