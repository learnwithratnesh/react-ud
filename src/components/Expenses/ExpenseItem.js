import Cards from '../UI/Cards';
import ExpenseDate from './ExpenseDate'
import './ExpenseDate.css'
import './ExpenseItem.css'
const ExpenseItem = (props) => {
    return (
        <Cards className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
            </div>
            <div className="expense-item__price">{props.amount}</div>
        </Cards>)

}
export default ExpenseItem;