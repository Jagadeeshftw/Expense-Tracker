import "../index.css"
import "./ExpenseDate";
import ExpenseDate from "./ExpenseDate";
const Expense = (props)=>{
    return(
        <div className="flex flex-col bg-gray-600 rounded-xl md:flex-row space-y-3 md:space-x-3 justify-between items-center">
          <div className=" flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 items-center">
            <ExpenseDate date={props.date}/>
            <p className="font-serif font-extrabold text-white text-2xl">
              {props.title}
            </p>
          </div>

          <div>
            <button className="bg-gray-800 text-black px-8 py-4 border-2 border-white rounded-xl font-serif font-medium hover:shadow-2xl hover:bg-grey-900 duration-200 text-white hover:border-gray-800 hover:bg-white hover:text-gray-800">
              {props.amount}
            </button>
          </div>
        </div>

    );
}
export default Expense;