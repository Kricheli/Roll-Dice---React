import React, { Component } from 'react';
import CurrentScore from './components/Player/CurrentScore';
import Total from './components/Player/Total';
import Player from './components/Player/Player'
import Inpuet from './components/Input/input';
import Button from './components/button/button';
state = {totalScore:0, currentScore:0 }
onClickEventNewGame=(e)=>{
  this.setState({total:0, currentScore:0});
}
class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default App;