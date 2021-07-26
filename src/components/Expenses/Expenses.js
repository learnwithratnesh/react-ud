import React, { useState } from 'react';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import Cards from '../UI/Cards';
import ExpenesesList from './ExpensesList';
import ExpensesChart from './ExpenseChart'
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2020")
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }
    const filteredExpenses = props.expenses.filter((items) => {
        return items.date.getFullYear().toString() === filteredYear;
    })
    return (<li>
        <Cards className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
            <ExpenesesList items={filteredExpenses}></ExpenesesList>
        </Cards>
    </li>)
}
export default Expenses