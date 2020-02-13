import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // take the user's input and update it to the state's value
    this.setState({username: e.target.value});
  }

  handleSubmit(e) {
    //Since it's a form, prevent the unnessary loading by calling e.preventDefault
    e.preventDefault(); // stops the page from refreshing.
    alert(`You typed ${this.state.username}`);
    // need to reset the name back to blank
    this.setState({username: ''});
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </form>
        <button>Submit!</button>
      </div>
    );
  }
}

export default Form;
