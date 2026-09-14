import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import ExpenseForm from "./components/ExpenseForm";
import Transactions from "./components/Transactions";
import "./App.css";
import { useState } from "react";
function App() {
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Uber ride",
      category: "Travel",
      amount: 500,
    },
    {
      id: 2,
      description: "Lunch with team",
      category: "Food",
      amount: 320,
    },
    {
      id: 3,
      description: "Amazon purchase",
      category: "Shopping",
      amount: 1200,
    },
  ]);

  const addExpense = (newExpense) => {
    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Track your expenses with AI.</p>
        </header>

        <section className="summary-grid">
          <SummaryCard
            title="Total Spent"
            value={`₹${totalSpent.toLocaleString("en-IN")}`}
          />

          <SummaryCard title="Transactions" value={expenses.length} />

          <SummaryCard title="Top Category" value="Food" />
        </section>

        <section className="content-grid">
          <ExpenseForm onAddExpense={addExpense} />

          <div className="insight-card">
            <h2>AI Insight</h2>
            <p>Your expenses will be analyzed by AI in a later stage.</p>
          </div>
        </section>

        <Transactions expenses={expenses} />
      </main>
    </div>
  );
}

export default App;
