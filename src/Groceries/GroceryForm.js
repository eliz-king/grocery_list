import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class ContactForm extends Component {
  state = { firstName: '', phone: '' }

  handleSubmit = (e) => {
    // stop the form from reloading
    // call a function to add the contact
    e.preventDefault()
    this.props.add(this.state)
    this.setState({ firstName: '', phone: '' })
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
          <label>First Name</label>
          <input 
          placeholder='First Name' 
          name='firstName'
          value={this.state.firstName}
          onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Phone</label>
          <input 
          placeholder='Phone'
          value={this.state.phone} 
          onChange={this.handleChange}
          />
        </Form.Field>
       <Button type='submit'>Submit</Button>
  </Form>
    )
  }
}

export default GroceryForm;