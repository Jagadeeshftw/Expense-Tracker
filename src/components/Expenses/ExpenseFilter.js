import "../../index.css";

const ExpenseFilter=(props)=>{
    const dropDownHandler=(event)=>{
        props.onChangeFilter(event.target.value);
    }
    return(
         <div className="flex justify-between px-4 w-full">
            <label htmlFor="year" className="text-white font-sans text-2xl">Filter by year</label>
            <select name="year" onChange={dropDownHandler} className="px-8 py-3 rounded-xl border-2 border-white bg-gray-800 text-white focus:outline-none" value={props.selected} id="">
                 <option value="2023">2023</option>
                 <option value="2022">2022</option>
                 <option value="2021">2021</option>
                 <option value="2020">2020</option>
            </select>
            
         </div>
    );
}

export default ExpenseFilter;