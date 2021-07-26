import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, updateFormState] = useState(false)
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        updateFormState(false)
    }
    const startEditingHandler = () => {
        updateFormState(true)
    }
    const stopEditingHandler = () => {
        updateFormState(false)
    }
    return (
        <div className="new-expense">
            {showForm ? <ExpenseForm onCancel={stopEditingHandler} onExpenseData={saveExpenseDataHandler} /> :
                <button onClick={startEditingHandler}>Add New Expense</button>}
        </div>
    )

}
export default NewExpense;