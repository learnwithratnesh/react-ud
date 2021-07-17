import './Cards'
const Cards = (props) => {
    return <div className={`card ${props.className}`}>{props.children}</div>
}
export default Cards
