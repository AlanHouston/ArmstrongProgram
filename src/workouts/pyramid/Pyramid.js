import React, { Component } from 'react';
import PyramidSets from './PyramidSets'
import PyramidInputs from './PyramidInputs';

class Pyramid extends Component{
    state={
        date:[],
        missed:[],
        last:[],
        max:[],
        total:[]
    }
    
    componentDidMount(){
        let dateArr=[]
        let missedArr=[];
        let lastArr=[];
        let maxArr=[];
        let totalArr=[];
        fetch("http://localhost:3000/pyramid")
            .then(r=>r.json())
            .then(d=>{
                d.map(t=>{
                    dateArr.push(t.date)
                    missedArr.push(t.missedSet)
                    lastArr.push(t.lastSet)
                    maxArr.push(t.max)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    missed:missedArr,
                    last:lastArr,
                    max:maxArr,
                    total:totalArr
                })
            })
    }


    // return(
    //     <div key={data.id}>
    //         <div>{data.date}:Failed on{data.missedSet}, Last set{data.lastSet}</div>
    //     </div>
    // )

    render(){
        
        return (
            <div className="App">
                <h1>DAY 2: PYRAMID</h1>
                <h3>Pyraimd of sets of 1, 2, 3, 4, etc. until missed set</h3>
                <h3>Then one max set</h3>
                <h2>REST</h2>
                <h3>10 seconds for each pull-up in last set</h3>
                <div>
                    <h3>Trying</h3>
                    <PyramidInputs/>
                    <p>Which set were you attempting, but couldn't complete?</p>
                    <h3>Last completed rep</h3>
                    <PyramidInputs/>
                    <p>In the failed set, which rep was the last one you completed</p>
                    {/* or "how many reps did you complete on the failed/missed set?" */}
                    <h3>Max Set Total Reps<PyramidInputs/></h3>
                </div>
                <PyramidSets 
                    date={this.state.date} 
                    missed={this.state.missed} 
                    last={this.state.last} 
                    max={this.state.max} 
                    total={this.state.total}
                />
            </div>
            );
        }
}

export default Pyramid;
