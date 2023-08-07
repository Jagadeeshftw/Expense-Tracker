import "../../index.css";

const ClickToAddExpense = (props) => {
  return (
    <div className="w-4/6 md:my-10">
      <div className="flex flex-col border-2 border-gray-800 px-8 py-4 bg-gray-800  rounded-2xl">
        <div className=" flex justify-center ">
          <button onClick={props.click} className="px-8 py-3 rounded-2xl border-2 text-white border-white bg-gray-800 mr-1 hover:border-gray-800 hover:text-gray-800 hover:bg-white duration-500">
            Add Expense
          </button>
        </div>
      </div>
    </div>
  );
};
export default ClickToAddExpense;
