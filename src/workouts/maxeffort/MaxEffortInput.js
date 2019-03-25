import React, { Component } from 'react';

export default class MaxEffortInput extends Component{
    state={
        whatToShow:0,
        repsOne:null,
        repsTwo:null,
        repsThree:null,
        repsFour:null,
        repsFive:null,
        total:null
        //should I pull everything but whatToShow? All will get added when setState
    }

    content={}

    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    getTotal=()=>{
        let total= Number(this.state.repsOne)
        +Number(this.state.repsTwo)
        +Number(this.state.repsThree)
        +Number(this.state.repsFour)
        +Number(this.state.repsFive);
        this.setState({total})
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
                        setOne:this.state.repsOne,
                        setTwo:this.state.repsTwo,
                        setThree:this.state.repsThree,
                        setFour:this.state.repsFour,
                        setFive:this.state.repsFive,
                        total:this.state.total
                    })
                }
                fetch("http://localhost:3000/maxeffort", newSet).then((res)=>{
                    return res.json();
                }).then(this.changeContent(1))
                }}>
                Set One<input onChange={(e)=>{
                    this.setState({repsOne:e.target.value})
                }}/><br/>
                Set Two<input onChange={(e)=>{
                    this.setState({repsTwo:e.target.value})
                }}/><br/>
                Set Three<input onChange={(e)=>{
                    this.setState({repsThree:e.target.value})
                }}/><br/>
                Set Four<input onChange={(e)=>{
                    this.setState({repsFour:e.target.value})
                }}/><br/>
                Set Five<input onChange={(e)=>{
                    this.setState({repsFive:e.target.value})
                }}/><br/>
                <button type='submit' onClick={()=>{    
                    this.getTotal();
                }}>Enter</button>
            </form>
        }else if(this.state.whatToShow === 1){
            this.content = 
                <div>
                    <button>Home</button><br/>
                    <div>This Session: 
                        One: {this.state.repsOne}, 
                        Two: {this.state.repsTwo}, 
                        Three: {this.state.repsThree}, 
                        Four: {this.state.repsFour}, 
                        Five: {this.state.repsFive}, 
                        Total: {this.state.total}
                    </div>
                </div>
        }
            
        return(
            <div>{this.content}</div>
        )
    }
}

