import "../index.css";
import Expense from "./Expense";
const ExpenseCard = (props) => {
  return (
    <div className="bg-gray-800 rounded-2xl">
      <div className=" flex flex-col justify-center items-center">
        <Expense
          title={props.index0.title}
          amount={props.index0.amount}
          date={props.index0.date}
        />
        <Expense
          title={props.index1.title}
          amount={props.index1.amount}
          date={props.index1.date}
        />
        <Expense
          title={props.index2.title}
          amount={props.index2.amount}
          date={props.index2.date}
        />
      </div>
    </div>
  );
};
export default ExpenseCard;
