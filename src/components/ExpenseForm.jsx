import React from "react";
import { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (description.trim() === "" || amount === "" || category === "") {
      setMessage("Please fill in all fields.");
      return;
    }

    if (Number(amount) <= 0) {
      setMessage("Amount must be greater than zero.");
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description,
      category: category,
      amount: Number(amount),
    };

    onAddExpense(newExpense);

    setDescription("");
    setAmount("");
    setCategory("");

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
      <label htmlFor="expenseCategory">Category</label>

      <select
        id="expenseCategory"
        value={category}
        onChange={(event) => {
          setCategory(event.target.value);
        }}
      >
        <option value="">Select a category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
        <option value="Bills">Bills</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add Expense</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default ExpenseForm;
