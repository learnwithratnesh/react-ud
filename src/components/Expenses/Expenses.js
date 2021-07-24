import React, { useState } from 'react';
import './Expenses.css'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Cards from '../UI/Cards';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter((items) => {
        return items.date.getFullYear().toString() === filteredYear;
    })
    return (<div>
        <Cards className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            {filteredExpenses.map((expense, index) =>
                <ExpenseItem key={index} date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>
            )}
        </Cards>
    </div>)
}
export default Expenses