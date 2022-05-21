import React, { Component } from "react";

class Input extends Component {
  state = { UserInput: "" };

  handleChange = (event) => {
    if(event.target.value !== typeof(Number)){
      console.log("error");
    }
  };
  render() {
    return (
      <div>
        <input type="text" maxLength={4} onChange={this.handleChange} />
      </div>
    );
  }
}
// function that has default value of 'user input', it ca change by user input

export default Input;
