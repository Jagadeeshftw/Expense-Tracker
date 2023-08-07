import "../../index.css";
import Expense from "./Expense";
const ExpenseContent = (props) => {
  let expenseContent = <p className="text-white text-2xl">No Expenses found</p>;
  if (props.items.length > 0) {
    expenseContent = props.items.map((expense) => (
      <Expense
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      ></Expense>
    ));
  }
  return expenseContent;
};

export default ExpenseContent;
