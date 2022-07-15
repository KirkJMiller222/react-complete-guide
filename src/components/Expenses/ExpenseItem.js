import  ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';
import React from 'react';
// import ExpensesChart from './ExpensesChart';

const ExpenseItem = (props) => {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className = "expense-item__description">
        <h2>{props.title}</h2>
        {/* <ExpensesChart>{props.items}</ExpensesChart> */}
        <div className = "expense-item__price">Go</div>
      </div>
    </Card>
  </li>);
}

export default ExpenseItem;
