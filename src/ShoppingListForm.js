import React, {Component} from 'react';

class ShoppingListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', quantity: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  // The Form:(Step 5: Creating the function for handleSubmit; HOW I AM ADDING AN ITEM TO STATE FROM SEPERATE COMPONENT
  handleSubmit(e) {
    e.preventDefault();
    this.props.addItem(this.state); // passig down a prop in order to pass data UP to the paraent
    this.setState({name: '', quantity: ''}); // reset form data back to a zero input
  }
  // User's Input
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value // ***with this format, handleChange will control both inputs***
    });
  }

  render() {
    return (
      // Step 4. Multiple Forms/Passing Data Up: Add onSubmit to form element, assigning it to this.hanldeSubmit
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
        <button>Add Item</button>
      </form>
    );
  }
}

export default ShoppingListForm;

// The entire goal of handleSubmit is to take care of everything that needs to once the user's submit's their input
// --> 1. don't refresh page, 2. call addItem prop and pass it the new state (items to go into state)

/*
uuid returns:
id:"35c455ad-66df-4fc2-a530-00d0e5c7980c"
name:"Milk"
quantity:"2 gallons"

*/
