import "../../index.css";
const Card =(props)=>{
    const classes="flex flex-col rounded-2xl "+ props.className;
    return(
        <div className={classes}>
          {props.children}
        </div>
    );
}
export default Card;