import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {username: '', email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    // take the user's input and update it to the state's value
    // this.setState({username: e.target.value}); // working with one input
    this.setState({[e.target.name]: e.target.value});
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
        <h1>Form w/ Multiple Inputs</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}

export default Form;
