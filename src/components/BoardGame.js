import React, { Component } from "react";
import useSound from 'use-sound'
import mySound from '../Assets/Sound/[MP3FY] ROYALTY FREE Funny Music Background For Videos _ Music For Gaming And Fails Royalty Free.mp3'
import Style from "../Assets/Styles/Style.css";

export default class Game extends Component {
  state = {
    dice1: null,
    dice2: null,
    current: 0,
    totalp1: 0,
    totalp2: 0,
    player1turn: true,
  };

  componentDidMount() {
    const random1 = Math.ceil(Math.random() * 6);
    const random2 = Math.ceil(Math.random() * 6);
    this.setState({ dice1: `dice${random1}`, dice2: `dice${random2}` });
  }
  onRollDiceClick = () => {
    const random1 = Math.ceil(Math.random() * 6);
    const random2 = Math.ceil(Math.random() * 6);
    this.setState({ dice1: `dice${random1}`, dice2: `dice${random2}` });
    this.setState((prev) => {
      return { current: prev.current + random1 + random2 };
    })
    if (random1 + random2 === 12) {
      setTimeout(() => this.changeTurnAndUpdate("roll"), 100);
    }
  };

  changeTurnAndUpdate = (origin) => {
    const whoToAddTo = this.state.player1turn ? "totalp1" : "totalp2";
    let amountToAddToCurrent = 0;
    if (origin === "hold") {
      amountToAddToCurrent = this.state.current;
    }
    this.setState((prev) => {
      return {
        player1turn: !prev.player1turn,
        current: 0,
        [whoToAddTo]: prev[whoToAddTo] + amountToAddToCurrent,
      }
    })
  }
  onNewGame=()=>{
    this.setState((prev) => {
      return {
        player1turn: !prev.player1turn,
        current: 0,
        totalp1:0,
        totalp2:0
      }
    })
  } 

  render() {
    if(this.state.current > 100 && this.state.player1turn){
      return <div className="Player1-winner">Player 1 Won!</div>
    }else if(this.state.current > 100 && !this.state.player1turn){
      return (<div className="Player2-winner">Player 2 Won</div>)
    }

    function MyButton(){
      const [playSound] = useSound(mySound)
    }
    return (
      <div className="container">
        <Player
          name="Player1"
          totalScore={this.state.totalp1}
          currentScore={this.state.current}
          playerTurn={this.state.player1turn}
        />
        <Controler
        sound={this.MyButton}
          winner={this.winner}
          newGame={this.onNewGame}
          changeTurn={this.changeTurnAndUpdate}
          diceA={this.state.dice1}
          diceB={this.state.dice2}
          onRollDiceClick={this.onRollDiceClick}
        />
        <Player
          name="Player2"
          totalScore={this.state.totalp2}
          currentScore={this.state.current}
          playerTurn={!this.state.player1turn}
        />
      </div>
    );
  }
}

function Player(props) {
  return (
    <div className="player">
      <h1 className="name-headline">{props.name}</h1>
      <h2 className="total-headline">Total<br /> {props.totalScore}</h2>
      <div className="currentScore">
        Current: {props.playerTurn ? props.currentScore : 0}
      </div>
    </div>
  );
}


function Controler(propes) {
  return (
    <div className="control">
      <button className="newGame" onClick={propes.newGame}>New Game</button>
      <div className={`img1 ${propes.diceA}`}></div>
      <div className={`img1 ${propes.diceB}`}></div>
      <button onClick={propes.onRollDiceClick}>Roll Dice</button>
      <button onClick={() => propes.changeTurn("hold")}>Hold</button>
      <input type="text" />
      {/* <div>{propes.winner}</div> */}
    </div>
  );
}
