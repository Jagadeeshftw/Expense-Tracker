import "../../index.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpenseContent from "./ExpenseContent";
const ExpenseCard = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHander = (event) => {
    setFilteredYear(event);
  };
  const filteredExpense = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() == filteredYear;
  });

  return (
    <Card className="justify-center items-center p-4 bg-gray-800 space-y-4">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHander}
      ></ExpenseFilter>
      <ExpenseContent items ={filteredExpense}></ExpenseContent>
    </Card>
  );
};
export default ExpenseCard;
