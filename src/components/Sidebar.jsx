import React from "react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>ExpenseAI</h2>

      <nav>
        <a href="#dashboard">Dashboard</a>
        <a href="#add-expense">Add Expense</a>
        <a href="#transactions">Transactions</a>
      </nav>
    </aside>
  );
};

export default Sidebar;
