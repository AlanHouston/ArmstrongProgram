import React, { Component } from 'react';
import SetOne from './SetOne';
import SetTwo from './SetTwo';
import SetThree from './SetThree';
import SetFour from './SetFour';
import SetFive from './SetFive';


class MaxEffort extends Component{
    sets=[]
    
    render(){
        
        return (
            <div className="App">
                <h1>DAY 1: MAX EFFORT</h1>
                <h3>5 max effort sets</h3>
                <h2>REST</h2>
                <h3>90 seconds</h3>
                <SetOne sets={this.sets}/>
                {/* <SetTwo />
                <SetThree />
                <SetFour />
                <SetFive /> */}
                {/* <div>{whatToShow}</div> */}
                {/* <div>Set 1 {setOne}</div>
                <div>Set 2 {setTwo}</div>
                <div>Set 3 {setThree}</div>
                <div>Set 4 {setFour}</div>
                <div>Set 5 {setFive}</div> */}
            </div>
        );
        }
    }
    
    export default MaxEffort;