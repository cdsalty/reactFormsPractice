import React, {Component} from 'react';
import ShoppingListForm from './ShoppingListForm';
import uuid from 'uuid/v4';

class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {name: 'Milk', quantity: '2 gallons', id: uuid()},
        {name: 'Breed', quantity: '2 Loaves', id: uuid()}
      ]
    };
    // STEP 2: Multiple Forms (bind the function)
    this.addItem = this.addItem.bind(this);
  }

  // STEP 1: Multiple Forms (Define a method that will add a single item input)
  addItem(item) {
    // take the item(object) that is coming in and make sure to give it a prop key/uuid()
    // carry the entire object/item coming in using ...spread parameter and adding uuid()
    let newItemFromitem = {...item, id: uuid()};
    this.setState((state) => ({
      // items: [...state.items, item] // add to the existing state along with the new item, this will be new state
      items: [...this.state.items, newItemFromitem]
    }));
  }

  renderItems() {
    return (
      <ul>
        {this.state.items.map((item) => (
          <li key={item.id}>
            {item.name}: {item.quantity}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    /* 
    STEP 3. Multiple Forms: Pass addItem function down to the actual form component, ShoppingListForm
      - Pass in the prop, addItem and have it call itself:  addItem={this.addItem}
    */
    return (
      <div>
        <h3>Shopping List</h3>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem} />
      </div>
    );
  }
}

// when do you want the addItem to be called? -----> Once the form is submitted.

export default ShoppingList;
