import React, { Component } from 'react';

export default class PyramidInputs extends Component{
    state={
        whatToShow:0,
    }

    content={}

    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    getTotal=()=>{
        let n=Number(this.state.missed);
        let total=((n*(n+1))/2) + Number(this.state.last) + Number(this.state.max)
        this.setState({total})
    }
   
    render(){
        var date = new Date();
        var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        if(this.state.whatToShow === 0){
            this.content=
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(!isNaN(this.state.missed)&&
                    !isNaN(this.state.last)&&
                    !isNaN(this.state.max)){
                    let newSet={
                        method:"POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            date:newDate,
                            missedSet:this.state.missed,
                            lastSet:this.state.last,
                            max:this.state.max,
                            total:this.state.total
                        })
                    }
                fetch("http://localhost:3000/pyramid", newSet).then((res)=>{
                    return res.json().then(this.changeContent(1));
                })
                }}}>
                Trying<input type="number" min="0" className="inputMarg" onChange={(e)=>{
                    this.setState({missed:e.target.value})
                }}/>
                <p>Which set were you attempting, but did not complete?</p><br/>

                Last Completed Rep<input type="number" min="0" className="inputMarg" onChange={(e)=>{
                    this.setState({last:e.target.value})
                }}/>
                <p>How many reps did you complete on the failed set?</p><br/>

                Max Set Total Reps<input type="number" min="0" className="inputMarg" onChange={(e)=>{
                    this.setState({max:e.target.value})
                }}/><br/>

                <button className="homeButton" type='submit' onClick={()=>{
                    this.getTotal();
                }}>Complete Set</button>
            </form>
        }
        else if(this.state.whatToShow === 1){
            this.content = 
                <p>This Session: 
                    Trying: {this.state.missed}, 
                    Failed on: {this.state.last}, 
                    Max: {this.state.max}, 
                    Total: {this.state.total}
                    {/* Will need to move the fetch call to the Home button when implementing edit button */}
                </p>
        }
        return(
            <div>{this.content}</div>
        )
    }
}

