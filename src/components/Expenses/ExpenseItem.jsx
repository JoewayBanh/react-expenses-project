import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">
          {props.amount.toString().includes(".")
            ? props.amount.toString().replace(".", ",")
            : props.amount.toString() + ",00"}
          {" kr."}
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
