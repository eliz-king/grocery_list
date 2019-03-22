import React, { Component } from 'react';
import { } from 'semantic-ui-react'
import List from './Groceries/List';
import GroceryForm from './Groceries/GroceryForm';



class App extends Component {
  state = {
    groceries = [
      {id: 1, itemName: 'Bananas', price: 1.50},
      {id: 2, itemName: 'Coffee', price: 4.50},
      {id: 3, itemName: 'Chicken', price: 10.00},
      {id: 4, itemName: 'Sugar', price: 2.75 }
    ]
  }


  addItem = (incomingGroceries) => {
    const { groceries } = this.state
    const groceries = { name: incomingGroceries, id: this.getUniqId(), complete: false }
    this.setState({ groceries: [groceries, ...groceries] })
  }

  getUniqId = () => {
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1)
  }

  todoClick = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( groceries => {
        if (groceries.id === id) {
          return {
            ...groceries,
            complete: !groceries.complete
          }
        }
      })
    })
  }

  render() {
    const { groceries, } = this.state
    return (
      <div>
        <TodoForm addItem={this.addItem} />
        <List name='Grocery List' items={groceries} groceriesClick={this.groceriesClick} />
      </div>

    );
  }
}

export default App;
