import React from "react";

const Transactions = ({ expenses, onDeleteExpense }) => {
  return (
    <section className="transactions">
      <h2>Recent Transactions</h2>

      {expenses.map((expense) => (
        <div className="transaction" key={expense.id}>
          <div>
            <strong>{expense.description}</strong>
            <p>{expense.category}</p>
          </div>

          <strong>₹{expense.amount.toLocaleString("en-IN")}</strong>
          <button
            className="delete-button"
            onClick={() => onDeleteExpense(expense.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </section>
  );
};

export default Transactions;
