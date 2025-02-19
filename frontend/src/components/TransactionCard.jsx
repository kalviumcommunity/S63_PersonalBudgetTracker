import React from "react";
import Navbar from "../components/Navbar"; // Adjust path if needed

const TransactionsGrid = () => {
  const transactions = [
    { category: "Groceries", type: "expense", amount: 45.99, date: "2025-02-19", time: "10:15", description: "Weekly grocery shopping", status: "completed", paymentMethod: "Credit Card" },
    { category: "Salary", type: "income", amount: 3000.0, date: "2025-02-20", time: "09:00", description: "Monthly salary deposit", status: "completed", paymentMethod: "Bank Transfer" },
    { category: "Dining", type: "expense", amount: 75.5, date: "2025-02-18", time: "19:30", description: "Dinner at a restaurant", status: "completed", paymentMethod: "Debit Card" },
    { category: "Rent", type: "expense", amount: 1200.0, date: "2025-02-01", time: "12:00", description: "Monthly rent", status: "pending", paymentMethod: "Bank Transfer" },
    { category: "Entertainment", type: "expense", amount: 25.0, date: "2025-02-17", time: "20:00", description: "Movie tickets", status: "completed", paymentMethod: "PayPal" },
    { category: "Freelance", type: "income", amount: 500.0, date: "2025-02-15", time: "14:00", description: "Freelance project payment", status: "completed", paymentMethod: "PayPal" },
    { category: "Utilities", type: "expense", amount: 150.0, date: "2025-02-10", time: "08:00", description: "Electricity and water bill", status: "completed", paymentMethod: "Credit Card" },
    { category: "Shopping", type: "expense", amount: 200.0, date: "2025-02-12", time: "16:45", description: "Clothing and accessories", status: "completed", paymentMethod: "Debit Card" },
    { category: "Gift", type: "income", amount: 100.0, date: "2025-02-14", time: "18:00", description: "Birthday gift", status: "completed", paymentMethod: "Cash" },
    { category: "Transport", type: "expense", amount: 50.0, date: "2025-02-16", time: "07:30", description: "Public transport pass", status: "completed", paymentMethod: "Credit Card" },
  ];

  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.container}>
        {transactions.map((transaction, index) => (
          <div key={index} style={styles.card}>
            {/* Header */}
            <div style={styles.header}>
              <h3 style={styles.category}>{transaction.category}</h3>
              <span style={{ ...styles.amount, color: transaction.type === "income" ? "green" : "red" }}>
                {transaction.type === "income" ? "+" : "-"}${transaction.amount}
              </span>
            </div>

            {/* Description */}
            <p style={styles.description}>{transaction.description}</p>

            {/* Date & Time */}
            <div style={styles.dateTime}>
              <p>📅 {transaction.date}</p>
              <p>⏰ {transaction.time}</p>
            </div>

            {/* Status & Payment Method */}
            <p><strong>Status:</strong> <span style={{ color: transaction.status === "completed" ? "green" : "orange" }}>{transaction.status}</span></p>
            <p><strong>Payment Method:</strong> {transaction.paymentMethod}</p>

            {/* Action Button */}
            <button style={styles.button}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline Styles for the component
const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh',
    width: '100vw',
    backgroundColor: '#f4f4f4',
    margin: 0,
    padding: 0,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "40px auto",
    backgroundColor: "#f8f8f8",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  category: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#6b46c1",
  },
  amount: {
    fontSize: "18px",
    fontWeight: "bold",
  },
  description: {
    fontSize: "14px",
    color: "#666",
    fontStyle: "italic",
    marginBottom: "10px",
  },
  dateTime: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    color: "#555",
    marginBottom: "10px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#6b46c1",
    color: "#fff",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default TransactionsGrid;