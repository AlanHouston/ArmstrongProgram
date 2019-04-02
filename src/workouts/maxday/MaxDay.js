import React, { Component } from 'react';
import MaxDaySets from './MaxDaySets';
import MaxDayInputs from './MaxDayInputs';

    // date: String,
    // reps: Number,
    // totalSets: Number,
    // lastSet: Number,
    // total: Number

export default class MaxDay extends Component{
    state={
        date:[],
        reps:[],
        totalSets:[],
        lastSet:[],
        total:[]
    }

    componentDidMount(){
        let dateArr=[];
        let repsArr=[];
        let totalSetsArr=[];
        let lastSetArr=[];
        let totalArr=[];
        fetch("http://localhost:3000/maxday")
            .then(r=>r.json())
            .then(d=>{
                d.reverse().map(t=>{
                    dateArr.push(t.date)
                    repsArr.push(t.reps)
                    totalSetsArr.push(t.totalSets)
                    lastSetArr.push(t.lastSet)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    reps:repsArr,
                    totalSets:totalSetsArr,
                    lastSet:lastSetArr,
                    total:totalArr
                })
            })
    }

    render(){
        return (
        <div className="App">
            <button className="homeButton" onClick={()=>{this.props.changeView(0)}}>Return to Home</button>
            <h1>DAY 4: MAX DAY</h1>
            <h3>Max number of training sets</h3>
            <h2>REST</h2>
            <h3>60 seconds</h3>
            <MaxDayInputs/>
            <MaxDaySets
                date={this.state.date}
                reps={this.state.reps}
                totalSets={this.state.totalSets}
                lastSet={this.state.lastSet}
                total={this.state.total}
            />
        </div>
        );
    }
}

