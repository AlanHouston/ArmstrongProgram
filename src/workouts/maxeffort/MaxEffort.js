import React, { Component } from 'react';
// import SetOne from './SetOne';
// import SetTwo from './SetTwo';
// import SetThree from './SetThree';
// import SetFour from './SetFour';
// import SetFive from './SetFive';


class MaxEffort extends Component{
    state={
        sets:[],
    }

    showInputBox(){
        return (
            <form onSubmit={(e)=>{e.preventDefault()}}>
                <input onChange={(e)=>{
                let reps=e.target.value;
                this.setState({sets:[...this.sets,reps]})
                }}/>
                <button type='submit' onClick={()=>{
                    let set = this.state.sets.length;
                    this.showReps(set);
                }}></button>
            </form>
        )
    }

    showReps=(set)=>{
        return(this.state.sets[set])
    }
    
    render(){
        
        return (
            <div className="App">
                <h1>DAY 1: MAX EFFORT</h1>
                <h3>5 max effort sets</h3>
                <h2>REST</h2>
                <h3>90 seconds</h3>
                <div>Set One {this.showInputBox}</div>
                <div>Set Two {this.showInputBox}</div>
                <div>Set Three {this.showInputBox}</div>
                <div>Set Four {this.showInputBox}</div>
                <div>Set Five {this.showInputBox}</div>
                {/* completed button at bottom */}
                
            </div>
        );
        }
    }
    
    export default MaxEffort;
