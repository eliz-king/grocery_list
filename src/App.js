import React, { Component } from 'react';
import { Button, Icon, } from 'semantic-ui-react';
import List from './Groceries/List';
import GroceryForm from './Groceries/GroceryForm';
import Groceries from './Groceries/Groceries';



class App extends Component {
  state = {
    groceries: [
      {id: 1, itemName: 'Bananas', price: 1.50},
      {id: 2, itemName: 'Coffee', price: 4.50},
      {id: 3, itemName: 'Chicken', price: 10.00},
      {id: 4, itemName: 'Sugar', price: 2.75 },
    ]
  }


  removeGrocery = (id) => {
    const groceries = this.state.grocery.filter( grocery => {
      if (grocery.id !== id )
        return grocery
    })
    this.setState({ groceries: [...groceries]})
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }

  addItem = (incomingGroceries) => {
    const grocery = { id: this.getUniqId(), ...incomingGroceries }
    this.setState({ groceries: [grocery, ...this.state.groceries] })
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
            complete: !grocery.complete
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
        <GroceryForm add={this.addItem} />
        <List name='Grocery List' items={groceries} groceriesClick={this.groceriesClick} />
        <Groceries groceries={groceries} remove={this.removeGrocery} />
      </div>

    );
  }
}

export default App;
