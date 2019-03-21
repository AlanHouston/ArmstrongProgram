import React, { Component } from 'react';
import DaySelectorHome from './DaySelectorHome';
import MaxEffort from './workouts/maxeffort/MaxEffort'
import Pyramid from './workouts/pyramid/Pyramid'
import GripSwitch from './workouts/GripSwitch'
import MaxDay from './workouts/MaxDay'
// import DayFive from './DayFive'

class DaySelector extends Component{
    state={
        whatToDisplay: 0,
    }
    
    changeView = (view)=>{
        this.setState({whatToDisplay:view})
    }

    render(){
        let whatToRender = null;
        if(this.state.whatToDisplay ===0){
            whatToRender = <DaySelectorHome changeView={this.changeView}/>
        }
        if(this.state.whatToDisplay ===1){
            whatToRender = <MaxEffort changeView={this.changeView}/>
        }
        if(this.state.whatToDisplay ===2){
            whatToRender = <Pyramid changeView={this.changeView}/>
        }
        if(this.state.whatToDisplay ===3){
            whatToRender = <GripSwitch changeView={this.changeView}/>
        }
        if(this.state.whatToDisplay ===4){
            whatToRender = <MaxDay changeView={this.changeView}/>
        }
        // if(this.state.whatToDisplay ===5){
        //     whatToRender = <DayFive changeView={this.changeView} toggleDayFive={this.state.toggleDayFive}/>
        // }

        return (
            <div className="App">
                {whatToRender}
            </div>
        );
    }
}

export default DaySelector;