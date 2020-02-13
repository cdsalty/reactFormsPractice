import React, {Component} from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {username: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // take the user's input and update it to the state's value
    this.setState({username: e.target.value});
  }

  render() {
    return (
      <div>
        <h1>Form Demo</h1>
        <form>
          <input type="text" value={this.state.username} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

export default Form;
