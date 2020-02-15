import React, {Component} from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', quantity: ''};
  }

  hanldeChange(e) {
    this.setState({
      [e.target.name]: e.target.value // ***with this format, handleChange will control both inputs***
    });
  }

  render() {
    return (
      <form>
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
