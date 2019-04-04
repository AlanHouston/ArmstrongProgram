import React, { Component } from 'react';

export default class PushUpInput extends Component{
    state={
        whatToShow:0,
    }

    content={}

    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    getTotal=()=>{
        let total= Number(this.state.one)
        +Number(this.state.two)
        +Number(this.state.three);
        this.setState({total})
    }

    render(){
        var date = new Date();
        var newDate= (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
        
        if(this.state.whatToShow === 0){
        this.content=
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(!isNaN(this.state.one)&&
                    !isNaN(this.state.two)&&
                    !isNaN(this.state.three)){
                    let newSet={
                        method:"POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify({
                            date:newDate,
                            one:this.state.one,
                            two:this.state.two,
                            three:this.state.three,
                            total:this.state.total
                        })
                    }
                fetch("http://localhost:3000/pushup", newSet).then((res)=>{
                    return res.json();
                }).then(this.changeContent(1))
                }}}>
                Set One<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({one:e.target.value})
                }}/><br/>
                Set Two<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({two:e.target.value})
                }}/><br/>
                Set Three<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({three:e.target.value})
                }}/><br/>
                <button className="homeButton" type='submit' onClick={()=>{    
                    this.getTotal();
                }}>Complete Set</button>
            </form>
        }else if(this.state.whatToShow === 1){
            this.content = 
                <p>This Session: 
                    One: {this.state.one}, 
                    Two: {this.state.two}, 
                    Three: {this.state.three}, 
                    Total: {this.state.total}
                </p>
                
        }
            
        return(
            <div>{this.content}</div>
        )
    }
}

