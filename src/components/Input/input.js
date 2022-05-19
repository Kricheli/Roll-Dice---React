import React, { Component } from 'react';

class Input extends Component {
state={UserInput: ""}

  render() {
    return (
      <div>
        <input type="text"  value={this.state.UserInput}/>
      </div>
    );
  }
}
// function that has default value of 'user input', it ca change by user input

export default Input;