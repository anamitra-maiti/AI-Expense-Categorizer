import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import ExpenseForm from "./components/ExpenseForm";
import Transactions from "./components/Transactions";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("expenses");

    if (savedExpenses) {
      return JSON.parse(savedExpenses);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const addExpense = (newExpense) => {
    setExpenses((previousExpenses) => {
      return [newExpense, ...previousExpenses];
    });
  };

  const deleteExpense = (expenseId) => {
    setExpenses((previousExpenses) => {
      return previousExpenses.filter((expense) => expense.id !== expenseId);
    });
  };

  const totalSpent = expenses.reduce(
    (total, expense) => total + expense.amount,
    0,
  );

  const categoryTotals = expenses.reduce((totals, expense) => {
    totals[expense.category] = (totals[expense.category] || 0) + expense.amount;

    return totals;
  }, {});

  const topCategory = Object.keys(categoryTotals).reduce((top, category) => {
    if (top === "" || categoryTotals[category] > categoryTotals[top]) {
      return category;
    }

    return top;
  }, "");

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

          <SummaryCard title="Top Category" value={topCategory || "None"} />
        </section>

        <section className="content-grid">
          <ExpenseForm onAddExpense={addExpense} />

          <div className="insight-card">
            <h2>AI Insight</h2>
            <p>Your expenses will be analyzed by AI in a later stage.</p>
          </div>
        </section>

        <Transactions expenses={expenses} onDeleteExpense={deleteExpense} />
      </main>
    </div>
  );
}

export default App;
