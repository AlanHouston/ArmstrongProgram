import React, { Component } from 'react';
import GripSwitchSets from './GripSwitchSets';
import GripSwitchInputs from './GripSwitchInputs';
// import GripSwitchInputs from './GripSwitchInputs';

class GripSwitch extends Component{
    state={
        date:[],
        overHandReps: [],
        inwardReps: [],
        wideReps: [],
        numberOfSets: [],
        total:[]
    }

    componentDidMount(){
        let dateArr=[];
        let overHandRepsArr=[];
        let inwardRepsArr=[];
        let wideRepsArr=[];
        let numberOfSetsArr=[];
        let totalArr=[];
        fetch("http://localhost:3000/gripswitch")
            .then(r=>r.json())
            .then(d=>{
                d.map(t=>{
                    dateArr.push(t.date)
                    overHandRepsArr.push(t.overHandReps)
                    inwardRepsArr.push(t.inwardReps)
                    wideRepsArr.push(t.wideReps)
                    numberOfSetsArr.push(t.numberOfSets)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    overHandReps:overHandRepsArr,
                    inwardReps:inwardRepsArr,
                    wideReps:wideRepsArr,
                    numberOfSets:numberOfSetsArr,
                    total:totalArr
                })
            })
    }

    render(){
        return (
            <div className="App">
                <h1>DAY 3: GRIP SWITCH</h1>
                <h3>3 sets overhand</h3>
                <h3>3 sets palms inward, pinkies together</h3>
                <h3>3 sets wide grip</h3>
                <h2>REST</h2>
                <h3>60 seconds</h3>
                <div>Overhand Reps <GripSwitchInputs /></div>
                <div>Inward Facing Reps <GripSwitchInputs /></div>
                <div>Wide Grip Reps <GripSwitchInputs /></div>
                <div>Total Sets of Each <GripSwitchInputs /></div>
                <GripSwitchSets 
                    date={this.state.date}
                    overHandReps={this.state.overHandReps}
                    inwardReps={this.state.inwardReps}
                    wideReps={this.state.wideReps}
                    numberOfSets={this.state.numberOfSets}
                    total={this.state.total}
                />
            </div>
    );
    }
}

export default GripSwitch;