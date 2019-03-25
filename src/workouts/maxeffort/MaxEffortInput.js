import React, { Component } from 'react';

export default class MaxEffortInput extends Component{
    state={
        whatToShow:0,
        repsOne:null,
        repsTwo:null,
        repsThree:null,
        repsFour:null,
        repsFive:null,
    }

    content={}

    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    render(){
        // let repsOne;
        // let repsTwo;
        // let repsThree;
        // let repsFour;
        // let repsFive;
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
                        total: Number(this.state.repsOne)+Number(this.state.repsTwo)+Number(this.state.repsThree)+Number(this.state.repsFour)+Number(this.state.repsFive)
                    })
                }
                fetch("http://localhost:3000/maxeffort", newSet).then((res)=>{
                    return res.json();
                })
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
                    this.changeContent(1)
                }}>Enter</button>
            </form>
        }else if(this.state.whatToShow ===1){
            this.content = 
                <div>
                    One: {this.state.repsOne}, 
                    Two: {this.state.repsTwo}, 
                    Three: {this.state.repsThree}, 
                    Four: {this.state.repsFour}, 
                    Five: {this.state.repsFive}, 
                    Total: {Number(this.state.repsOne)+Number(this.state.repsTwo)+Number(this.state.repsThree)+Number(this.state.repsFour)+Number(this.state.repsFive)}
                </div>
        }
            
        return(
            <div>{this.content}</div>
        )
    }
}

