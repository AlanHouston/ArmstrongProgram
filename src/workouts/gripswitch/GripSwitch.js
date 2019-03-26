import React, { Component } from 'react';
import GripSwitchSets from './GripSwitchSets';
import GripSwitchInputs from './GripSwitchInputs';

class GripSwitch extends Component{
    state={
        date:[],
        overHandReps: [],
        inwardReps: [],
        wideReps: [],
        overHandSets: [],
        inwardSets: [],
        wideSets: [],
        total:[]
    }

    componentDidMount(){
        let dateArr=[];
        let overHandRepsArr=[];
        let inwardRepsArr=[];
        let wideRepsArr=[];
        let overHandSetsArr=[];
        let inwardSetsArr=[];
        let wideSetsArr=[];
        let totalArr=[];
        fetch("http://localhost:3000/gripswitch")
            .then(r=>r.json())
            .then(d=>{
                d.reverse().map(t=>{
                    dateArr.push(t.date)
                    overHandRepsArr.push(t.overHandReps)
                    inwardRepsArr.push(t.inwardReps)
                    wideRepsArr.push(t.wideReps)
                    overHandSetsArr.push(t.overHandSets)
                    inwardSetsArr.push(t.inwardSets)
                    wideSetsArr.push(t.wideSets)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    overHandReps:overHandRepsArr,
                    inwardReps:inwardRepsArr,
                    wideReps:wideRepsArr,
                    overHandSets:overHandSetsArr,
                    inwardSets:inwardSetsArr,
                    wideSets:wideSetsArr,
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
                <GripSwitchInputs />
                <GripSwitchSets 
                    date={this.state.date}
                    overHandReps={this.state.overHandReps}
                    inwardReps={this.state.inwardReps}
                    wideReps={this.state.wideReps}
                    overHandSets={this.state.overHandSets}
                    inwardSets={this.state.inwardSets}
                    wideSets={this.state.wideSets}
                    total={this.state.total}
                />
            </div>
    );
    }
}

export default GripSwitch;