import "../../index.css";
import Expense from "./Expense";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
const ExpenseCard = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHander = (event) => {
    setFilteredYear(event);
  };
  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() == filteredYear;
  });
  let expenseContent = <p className="text-white text-2xl">No Expenses found</p>
  if(filteredExpense.length> 0)
  {
    expenseContent = filteredExpense.map((expense) => (
      <Expense
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></Expense>
    ));
  }
  return (
    <Card className="justify-center items-center p-4 bg-gray-800 space-y-4">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHander}
      ></ExpenseFilter>
      {expenseContent}
    </Card>
  );
};
export default ExpenseCard;
