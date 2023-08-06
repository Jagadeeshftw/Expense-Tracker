import "../../index.css"
const ExpenseDate = (props) => {
    const month = props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear();
  return (
    <div className=" flex.flex-col border-2 border-white rounded-2xl items-center bg-font-serif px-4 py-2 bg-gray-800 text-white hover:border-gray-800 hover:bg-white hover:text-gray-800 duration-500">
      <div className="text-center text-lg">{month}</div>
      <div className="text-center text-lg">{day}</div>
      <div className="text-center text-3xl">{year}</div>
    </div>
  );
};
export default ExpenseDate;