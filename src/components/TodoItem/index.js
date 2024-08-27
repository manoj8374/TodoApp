// Write your code here
import './index.css'

const TodoItem = ({details, deleteItem}) => {
  let a
  const {id, title} = details
  return (
    <li>
      <p className="todoTitle">{title}</p>
      <button onClick={() => deleteItem(id)}>Delete</button>
    </li>
  )
}

export default TodoItem
