import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    //sending the states to NewExpense.js
    props.onSaveExpenseData(expenseData);
    //resetting the states:
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  const formHandler = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      {!showForm && <button onClick={formHandler}>Add New Expense</button>}
      {showForm && (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                value={enteredAmount}
                min="0.01"
                step="0.01"
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="">Date</label>
              <input
                type="date"
                value={enteredDate}
                min="2019-01-01"
                max="2023-12-31"
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={formHandler}>Cancel</button>
            <button
              type="submit"
              onSubmit={
                enteredTitle !== "" &&
                enteredAmount !== "" &&
                enteredDate !== ""
                  ? formHandler
                  : ""
              }
            >
              Add expense
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default ExpenseForm;
