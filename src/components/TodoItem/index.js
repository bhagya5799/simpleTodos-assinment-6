// Write your code here
import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {title, id} = details
  const onclickDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo">
      <p>{title}</p>
      <button onClick={onclickDelete}>Delete</button>
    </li>
  )
}
export default TodoItem
