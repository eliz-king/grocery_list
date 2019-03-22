import React, { Component } from 'react';

class GroceryForm extends Component {
  state = { name: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addItem(this.state.name)
    this.setState({name: ''})
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }
 
  render() {
    const { name } = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input 
          required
          placeholder="add an item"
          value={name}
          name="Items"
          onChange={this.handleChange}
        />
      </form>
    )
  }
}

export default GroceryForm;