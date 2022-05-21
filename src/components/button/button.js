import React, { Component } from 'react';

class Button extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <button>{props.name}</button>
      </div>
    );
  }
}
// hold function - updating the total score (total+current) and passing the turn to the other player.
// new game - function that will return the defaul (total & current score: 0 & hide the dice).
// rollDice-selcting another random number
export default Button;