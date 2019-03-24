import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class GroceryForm extends Component {
  state = { itemName: '', price: '' }

  handleSubmit = (e) => {
    // stop the form from reloading
    // call a function to add the contact
    e.preventDefault();
    this.props.add(this.state);
    this.setState({ itemName: '', price: '' });
  }

  handleChange = (e) => {
    // change the state to user input
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
      <Form.Group widths='equal'>
        <Form.Field>
          <Form.Input 
          placeholder='item name' 
          name='itemName'
          value={this.state.itemName}
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Input 
          placeholder='Price'
          name='price'
          value={this.state.price} 
          onChange={this.handleChange}
          />
        </Form.Field>
       <Form.Button>Submit</Form.Button>
       </Form.Group>
  </Form>

    )
  }
}

export default GroceryForm;