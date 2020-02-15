import React, {Component} from 'react';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: 'Milk', quantity: '2 gallons'},
        {name: 'Breed', quantity: '2 Loaves'}
      ]
    };
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li>
            {item.name}:{item.qunatity}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h3>Shopping List</h3>
        {this.renderItems()}
      </div>
    );
  }
}

export default ShoppingList;
