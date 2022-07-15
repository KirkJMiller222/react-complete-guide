import './Expenses.css';
import Card from '../UI/Card';
import React from 'react';
// import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
// import ExpensesChart from './ExpensesChart';
// import NewExpense from '../NewExpense/NewExpense';


const Expenses = (props) => {
  // const [filteredYear, setFilteredYear] = useState('2020');

  // const filterChangeHandler = selectedYear => {
  //   setFilteredYear(selectedYear);
  // };

  // const filteredExpenses = props.items.filter(expense => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });



  return (
    <div>
      <Card className='expenses'>
        {/* <ExpensesFilter selected = {filteredYear} onChangeFilter = {filterChangeHandler}/> */}
        {/* <ExpensesChart expenses={props.items} /> */}
        <ExpensesList items = {props.items}/>
      </Card>
    </div>
  );
}

export default Expenses;
