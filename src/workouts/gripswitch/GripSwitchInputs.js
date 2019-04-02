import React, { Component } from 'react';

export default class GripSwitchInputs extends Component{
    state={
        whatToShow:0
    }

    content={}

    changeContent=(x)=>{
        this.setState({whatToShow:x})
    }

    getTotal=()=>{
        let total=Number(this.state.over)*Number(this.state.wideSets)
        +Number(this.state.in)*Number(this.state.inSets)
        +Number(this.state.wide)*Number(this.state.wideSets);
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
                        overHandReps:this.state.over,
                        inwardReps:this.state.in,
                        wideReps:this.state.wide,
                        overHandSets:this.state.overSets,
                        inwardSets:this.state.inSets,
                        wideSets:this.state.wideSets,
                        total:this.state.total
                    })
                }
                fetch("http://localhost:3000/gripswitch", newSet).then((res)=>{
                    return res.json().then(this.changeContent(1));
                })
                }}>

                Reps per Overhand Set<input type="number" onChange={(e)=>{
                    this.setState({over:e.target.value})
                }}/>
                <br/>

                Total Overhand Sets<input type="number" onChange={(e)=>{
                    this.setState({overSets:e.target.value})
                }}></input>
                <br/>

                Reps per Inward Facing Set<input type="number" onChange={(e)=>{
                    this.setState({in:e.target.value})
                }}/>
                <br/>

                Total Inward Facing Sets<input type="number" onChange={(e)=>{
                    this.setState({inSets:e.target.value})
                }}></input>
                <br/>

                Reps per Wide Grip Set<input type="number" onChange={(e)=>{
                    this.setState({wide:e.target.value})
                }}/>
                <br/>

                Total Overhand Sets<input type="number" onChange={(e)=>{
                    this.setState({wideSets:e.target.value})
                }}></input>
                <br/>

                <button className="homeButton" type='submit' onClick={()=>{
                    this.getTotal();
                }}>Enter</button>
            </form>
        }
        else if(this.state.whatToShow === 1){
            this.content = 
                <div>
                    <button>Home</button><br/>
                    <div>This Session: 
                        Overhand: {this.state.overSets} Sets of {this.state.over};
                        Inward Facing: {this.state.inSets} Sets of {this.state.in};
                        Wide Grip: {this.state.wideSets} Sets of {this.state.wide};
                        Total: {this.state.total}
                    </div>
                    {/* <button onClick={()=>{this.changeContent(0)}}></button> */}
                </div>
        }

        return(
            <div>{this.content}</div>
        )
    }
}


