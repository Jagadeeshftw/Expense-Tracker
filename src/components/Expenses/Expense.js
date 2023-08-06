import "../../index.css";
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import Card from "../UI/Card";
const Expense = (props) => {
  return (
    <Card className="px-4 w-full bg-gray-500 md:flex-row space-y-3 md:space-x-3 justify-between items-center">
      <div className=" flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 items-center m-4">
        <ExpenseDate date={props.date} />
        <div className="font-serif font-extrabold text-white text-2xl">
          {props.title}
        </div>
      </div>
      <button className="bg-gray-800 text-black px-8 py-4 border-2 border-white rounded-xl font-serif font-medium hover:shadow-2xl hover:bg-grey-900 duration-500 text-white hover:border-gray-800 hover:bg-white hover:text-gray-800">
        {props.amount}
      </button>
    </Card>
  );
};
export default Expense;
