import React, {Component} from 'react';
import ShoppingList from './ShoppingList';
import ShoppingListForm from './ShoppingListForm';

// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ShoppingList />
        <ShoppingListForm />
      </div>
    );
  }
}

export default App;

// This App.js file goes to ShoppingList
