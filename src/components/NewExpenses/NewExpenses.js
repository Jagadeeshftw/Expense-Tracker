import "../../index.css"
import ExpenseForm from "./ExpenseForm";
const NewExpenses =(props)=>{
    
    const saveExpenseHandler=(Event)=>{
        const expenseList={
            ...Event,
            id:Math.random().toString()
        }
        props.onSave(expenseList);
    }
     return(
        <div className="md:pt-10 w-4/6">
            <ExpenseForm  onSaveExpense={saveExpenseHandler}/>
        </div>
     );
}
export default NewExpenses;