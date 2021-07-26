import './ExpensesList.css'
import ExpenseItem from './ExpenseItem'
const ExpenesesList = (props) => {
    if (props.items.length === 0) {
        return (<h2 className="expenses-list__fallback ">Found no expenses.</h2>)
    } else {
        return (<ul className="expenses-list">
            {props.items.map((expense) =>
            (<ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}>
            </ExpenseItem>))}
        </ul>);

    }
}
export default ExpenesesList