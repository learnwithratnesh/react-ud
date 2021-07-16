import './Expenses.css'
import ExpenseItem from './ExpenseItem'
const Expenses = (props) => {
    return props.expenses.map((item, index) => {
        return (
            <div key={index} className="expenses">
                <ExpenseItem date={item.date} title={item.title} amount={item.amount}></ExpenseItem>
            </div>
        )
    })
}
export default Expenses