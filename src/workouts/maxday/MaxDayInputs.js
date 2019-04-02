import React, { Component } from 'react';

export default class MaxDay extends Component{
    state={
        whatToShow:0
    }

    content={}

    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    getTotal=()=>{
        let total=Number(this.state.reps) * Number(this.state.totalSets) + Number(this.state.lastSet);
        this.setState({total});
    }

    render(){
        var date = new Date();
        var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        if(this.state.whatToShow === 0){
            this.content=
            <form onSubmit={(e)=>{
                e.preventDefault();
                let newSet={
                    method:"POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        date:newDate,
                        reps:this.state.reps,
                        totalSets:this.state.totalSets,
                        lastSet:this.state.lastSet,
                        total:this.state.total
                    })
                }
                fetch("http://localhost:3000/maxday", newSet).then((res)=>{
                    return res.json().then(this.changeContent(1));
                })
                }}>
                Reps per Set<input type="number" onChange={(e)=>{
                    this.setState({reps:e.target.value})
                }}/>
                <br/>

                Total Number of Complete Sets<input type="number" onChange={(e)=>{
                    this.setState({totalSets:e.target.value})
                }}/>
                <br/>

                If your final set was incomplete, how many reps did you complete?<input type="number" onChange={(e)=>{
                    this.setState({lastSet:e.target.value})
                }}/><br/>

                <button className="homeButton" type='submit' onClick={()=>{
                    this.getTotal();
                }}>Enter</button>
            </form>
        }
        else if(this.state.whatToShow === 1){
            this.content = 
                <div>
                    <button>Home</button><br/>
                    <div>This Session: {this.state.totalSets} Full Sets of {this.state.reps},
                        Remainder: {this.state.lastSet}, 
                        Total: {this.state.total}
                    </div>
                    {/* <button onClick={()=>{this.changeContent(0)}}>Edit</button> */}
                    {/* Will need to move the fetch call to the Home button when implementing edit button */}
                </div>
        }
        return(
            <div>{this.content}</div>
        )
    }






}