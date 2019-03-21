import React, { Component } from 'react';
import PyramidSets from './PyramidSets'

class Pyramid extends Component{
    state={
        date:[],
        missed:[],
        last:[],
        max:[],
        total:[]
    }
    
    componentDidMount(){
        let missedArray=[];
        let lastArray=[];
        let totalArray=[];
        fetch("http://localhost:3000/pyramid")
            .then(r=>r.json())
            .then(d=>
                d.map(t=>{
                    missedArray.push(t.missedSet)
                    lastArray.push(t.lastSet)
                    totalArray.push(t.total)
                }))
        this.setState({
            missed:missedArray,
            last:lastArray,
            total:totalArray
        });
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
                    <h3>Trying<input></input></h3>
                    <p>Which set were you attempting, but couldn't complete?</p>
                    <h3>Last completed rep<input></input></h3>
                    <p>In the failed set, which rep was the last one you completed</p>
                    {/* or "how many reps did you complete on the failed/missed set?" */}
                    <h3>Max<input></input></h3>
                    <h3>Total:</h3>
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
