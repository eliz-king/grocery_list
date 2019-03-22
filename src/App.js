import React, { Component } from 'react';
import { } from 'semantic-ui-react'
import List from './Groceries/List';
import GroceryForm from './Groceries/GroceryForm';



class App extends Component {
  state = {
    todos: [
      { id: 1, item: 'Learn Rails', complete: true, },
      { id: 2, name: 'Learn React', complete: false, },
      { id: 3, name: 'Learn React Router', complete: false, }
    ]
  }


  addItem = (incomingGroceries) => {
    const { todos } = this.state
    const todo = { name: incomingTodo, id: this.getUniqId(), complete: false }
    this.setState({ todos: [todo, ...todos] })
  }

  getUniqId = () => {
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1)
  }

  todoClick = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.map( todo => {
        if (todo.id === id) {
          return {
            ...todo,
            complete: !todo.complete
          }
        }
      })
    })
  }

  render() {
    const { todos, } = this.state
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <List name='Todo List' items={todos} todoClick={this.todoClick} />
      </div>

    );
  }
}

export default App;
