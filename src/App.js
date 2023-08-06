import React from "react";
import "./index.css";
import Expense from "./components/Expenses/Expense";
import ExpenseCard from "./components/Expenses/ExpenseCard";
import NewExpenses from "./components/NewExpenses/NewExpenses";
import { useState } from "react";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Television",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummyExpenses);
  const addExpenseData = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    // main container

    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-500">
      {/* <h1 className="text-6xl text-white mx-2 p-3">Let's get started</h1> */}
      <NewExpenses onSave={addExpenseData}></NewExpenses>
      <div className="md:py-10 w-4/6">
        <ExpenseCard items={expenses}></ExpenseCard>
      </div>
    </div>
  );
}

export default App;
