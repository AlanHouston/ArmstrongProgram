import React, { Component } from 'react';
import './App.css';
import Home from './Home'
import DaySelector from './DaySelector'


class App extends Component {
  state={
    whatToDisplay: 0,
  }

  changeView = (view)=>{
    this.setState({whatToDisplay:view})
  }

  render() {
    let whatToRender = null;
    if(this.state.whatToDisplay === 0){
      whatToRender = <Home changeView={this.changeView}/>
    }
    else if(this.state.whatToDisplay === 1){
      whatToRender = <DaySelector />
    }
    else if(this.state.whatToDisplay === 2){
      // whatToRender = <Stats />
    }
    return (
      <div className="App">
        {whatToRender}
      </div>
    );
  }
}

export default App;
