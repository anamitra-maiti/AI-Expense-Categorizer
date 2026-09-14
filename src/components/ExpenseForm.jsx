import React from "react";
import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "" || amount === "") {
      setMessage("Please fill in both fields.");
      return;
    }

    if (Number(amount) <= 0) {
      setMessage("Amount must be greater than zero.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description,
      category: "Other",
      amount: Number(amount),
    };

    onAddExpense(newExpense);

    setDescription("");
    setAmount("");
    setMessage("Expense added successfully.");
  };

  return (
    <form className="expense-card" onSubmit={onSubmit}>
      <h2>Add Expense</h2>

      <label htmlFor="expenseDescription">Expense Description</label>

      <input
        id="expenseDescription"
        type="text"
        placeholder="Example: Coffee"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <label htmlFor="expenseAmount">Amount (₹)</label>

      <input
        id="expenseAmount"
        type="number"
        placeholder="Example: 250"
        value={amount}
        onChange={(event) => {
          setAmount(event.target.value);
        }}
      />

      <button type="submit">Add Expense</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default ExpenseForm;
