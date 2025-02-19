import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/landingPage";
import TransactionCard from "./components/TransactionCard"; // Import the TransactionCard component

function App() {
  // Dummy transaction data
  const dummyTransaction = {
    id: 1,
    category: "Groceries",
    amount: 45.99,
    date: "2025-02-19",
    type: "expense",
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/transaction"
          element={<TransactionCard transaction={dummyTransaction} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
