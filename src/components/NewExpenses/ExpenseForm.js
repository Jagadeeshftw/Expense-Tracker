import { useState } from "react";
import "../../index.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const expenseHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpense(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };
  return (
    <form
      action=""
      onSubmit={expenseHandler}
      className=" flex flex-col border-2 border-gray-800 px-8 py-4 bg-gray-800 my-4 rounded-2xl space-y-5 "
    >
      <div className="flex items-center flex-col md:flex-row justify-around space-y-2 md:space-y-0 md:space-x-5">
        <div className="flex flex-col space-y-2">
          <label htmlFor="input1" className="text-start font-serif text-white">
            Title
          </label>
          <input
            type="text"
            value={enteredTitle}
            className="flex text-start px-8 py-3 rounded-2xl focus:outline-none"
            id="input1"
            onChange={titleHandler}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="input2" className="text-start font-serif text-white">
            Amount
          </label>
          <input
            type="number"
            value={enteredAmount}
            className="text-start px-8 py-3 rounded-2xl focus:outline-none"
            id="input2"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <label htmlFor="input3" className="text-start font-serif text-white">
            Date
          </label>
          <input
            type="date"
            value={enteredDate}
            className=" text-start  px-8 py-3 rounded-2xl focus:outline-none"
            id="input3"
            min=""
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className=" flex justify-end ">
        <button className="px-8 py-3 rounded-2xl border-2 text-white border-white bg-gray-800 mr-1 hover:border-gray-800 hover:text-gray-800 hover:bg-white duration-500">
          Add Expense
        </button>
      </div>
    </form>
  );
};
export default ExpenseForm;
