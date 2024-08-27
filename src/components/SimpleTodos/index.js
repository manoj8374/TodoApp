import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {
    todoItems: initialTodosList,
  }

  removeTodoItem = id => {
    const {todoItems} = this.state
    const filteredArr = todoItems.filter(eachItem => eachItem.id !== id)
    this.setState({todoItems: filteredArr})
  }

  render() {
    const {todoItems} = this.state
    return (
      <div className="backgroundContainer">
        <div className="subContainer">
          <h1>Simple Todos</h1>
          <ul>
            {todoItems.map(eachItem => {
              let a
              return (
                <TodoItem
                  key={eachItem.id}
                  deleteItem={this.removeTodoItem}
                  details={eachItem}
                />
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
