import React, { Component } from 'react';
import { } from 'semantic-ui-react'
import List from './Groceries/List';
import GroceryForm from './Groceries/GroceryForm';



class App extends Component {
  state = {
    groceries: [
      {id: 1, itemName: 'Bananas', price: 1.50},
      {id: 2, itemName: 'Coffee', price: 4.50},
      {id: 3, itemName: 'Chicken', price: 10.00},
      {id: 4, itemName: 'Sugar', price: 2.75 }
    ]
  }


  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (incomingGroceries) => {
    const { groceries } = this.state
    const grocery = { name: incomingGroceries, id: this.getUniqId() }
    this.setState({ groceries: [grocery, ...groceries] })
  }

  getUniqId = () => {
    return Math.floor((1+ Math.random()) * 0x10000).toString(16).substring(1)
  }

  groceriesClick = (id) => {
    const { groceries } = this.state
    this.setState({
      groceries: groceries.map( grocery => {
        if (grocery.id === id) {
          return {
            ...grocery,
          }
        }
        return grocery
      })
    })
  }

  render() {
    const { groceries, } = this.state
    return (
      <div>
        <GroceryForm addItem={this.addItem} />
        <List name='Grocery List' items={groceries} groceriesClick={this.groceriesClick} />
      </div>

    );
  }
}

export default App;
