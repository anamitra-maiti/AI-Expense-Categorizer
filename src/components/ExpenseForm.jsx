import React from "react";
import { useState } from "react";

const ExpenseForm = () => {
  const [expense, setExpense] = useState("");
  const [result, setResult] = useState("");
  const handleChange = (e) => {
    setExpense(e.target.value);
  };
  const onSubmit = () => {
    if (expense.trim() === "") {
      setResult("Please enter an expense.");
      return;
    }

    setResult("Sample category: Transportation");
  };
  return (
    <section className="expense-card" id="add-expense">
      <h2>Add an Expense</h2>
      <label htmlFor="expenseInput">Expense Description</label>
      <input
        type="text"
        id="expenseInput"
        placeholder="Example: Rs.50 Uber Ride"
        onChange={handleChange}
      />

      <button onClick={onSubmit}>Categorize Expense</button>

      {result && <p>{result}</p>}
    </section>
  );
};

export default ExpenseForm;
