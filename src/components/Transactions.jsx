import React from "react";

const Transactions = () => {
  const transactions = [
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
  ];

  return (
    <section className="transactions">
      <h2>Recent Transactions</h2>

      {transactions.map((transaction) => (
        <div className="transaction" key={transaction.id}>
          <div>
            <strong>{transaction.description}</strong>
            <p>{transaction.category}</p>
          </div>

          <strong>₹{transaction.amount}</strong>
        </div>
      ))}
    </section>
  );
};

export default Transactions;
