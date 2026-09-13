import Sidebar from "./components/Sidebar";
import SummaryCard from "./components/SummaryCard";
import ExpenseForm from "./components/ExpenseForm";
import Transactions from "./components/Transactions";
import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />

      <main className="main-content">
        <header className="header">
          <h1>Dashboard</h1>
          <p>Track your expenses with AI.</p>
        </header>

        <section className="summary-grid">
          <SummaryCard title="Total Spent" value="₹8,450" />

          <SummaryCard title="Transactions" value="15" />

          <SummaryCard title="Top Category" value="Food" />
        </section>

        <section className="content-grid">
          <ExpenseForm />

          <div className="insight-card">
            <h2>AI Insight</h2>
            <p>Your expenses will be analyzed by AI in a later stage.</p>
          </div>
        </section>

        <Transactions />
      </main>
    </div>
  );
}

export default App;
