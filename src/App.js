import React from "react";
import "./index.css";
import Expense from "./components/Expense";
import ExpenseCard from "./components/ExpenseCard";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "Television", amount: 799.49, date: new Date(2021, 2, 12) },
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
  return (
    // main container

    <div className=" min-h-screen bg-gray-500">
      <h1 className="text-6xl text-white mx-2 p-3">Let's get started</h1>
      <div className="p-4 flex flex-col justify-center items-center">
        <ExpenseCard
          index0={expenses[0]}
          index1={expenses[1]}
          index2={expenses[2]}
        ></ExpenseCard>
      </div>
    </div>
  );
}

export default App;
