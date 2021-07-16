import './ExpenseItem.css'
const ExpenseItem = () => {
    const expenseData = new Date(2021, 6, 16);
    const expenseTitle = 'Car Insurance';
    const expeseAmount = '$210'
    return (
        <div className="expense-item">
            <div>{expenseData.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">{expeseAmount}</div>
        </div>
    )
}
export default ExpenseItem;