import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class GroceryForm extends Component {
  state = { itemName: '', price: '' }

  handleSubmit = (e) => {
    // stop the form from reloading
    // call a function to add the contact
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ itemName: '', price: '' })
  }

  handleChange = (e) => {
    // change the state to user input
    const {name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Form onSubmit={this.handleChange.handleSubmit}>
        <Form.Field>
          <label>Grocery Item</label>
          <input 
          placeholder='item name' 
          name='itemName'
          value={this.state.itemName}
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input 
          placeholder='Price'
          value={this.state.price} 
          onChange={this.handleChange}
          />
        </Form.Field>
       <Button type='submit'>Submit</Button>
  </Form>

    )
  }
}

export default GroceryForm;