import React, { Component } from 'react';
import MaxEffortSets from './MaxEffortSets';
import MaxEffortInput from './MaxEffortInput';

class MaxEffort extends Component{
    state={
        date:[],
        setOne:[],
        setTwo:[],
        setThree:[],
        setFour:[],
        setFive:[],
        total:[],
    }

    componentDidMount(){
        let dateArr=[];
        let setOneArr=[];
        let setTwoArr=[];
        let setThreeArr=[];
        let setFourArr=[];
        let setFiveArr=[];
        let totalArr=[];
        fetch("http://localhost:3000/maxeffort")
            .then(r=>r.json())
            .then(d=>{
                d.reverse().map(t=>{
                    dateArr.push(t.date)
                    setOneArr.push(t.setOne)
                    setTwoArr.push(t.setTwo)
                    setThreeArr.push(t.setThree)
                    setFourArr.push(t.setFour)
                    setFiveArr.push(t.setFive)
                    totalArr.push(t.total)
                })
                this.setState({
                    date:dateArr,
                    setOne:setOneArr,
                    setTwo:setTwoArr,
                    setThree:setThreeArr,
                    setFour:setFourArr,
                    setFive:setFiveArr,
                    total:totalArr
                })
            })
    }

    render(){
        
        return (
            <div className="App">
                <h1>DAY 1: MAX EFFORT</h1>
                <h3>5 max effort sets</h3>
                <h2>REST</h2>
                <h3>90 seconds</h3>
                <MaxEffortInput/>
                <MaxEffortSets
                    date={this.state.date} 
                    setOne={this.state.setOne} 
                    setTwo={this.state.setTwo} 
                    setThree={this.state.setThree} 
                    setFour={this.state.setFour} 
                    setFive={this.state.setFive} 
                    total={this.state.total}
                />
            </div>
        );
        }
    }
    
    export default MaxEffort;
