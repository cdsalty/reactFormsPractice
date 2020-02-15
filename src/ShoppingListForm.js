import React, {Component} from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', quantity: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value // ***with this format, handleChange will control both inputs***
    });
  }

  render() {
    return (
      // Step 4. Multiple Forms: Add onSubmit to the form element, set it equal to this.hanldeSubmit
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="quantity">Quantity: </label>
        <input
          id="quantity"
          name="quantity"
          value={this.state.quantity}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ShoppingListForm;
