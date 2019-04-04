import React, { Component } from 'react';
// import { Container, Row, Col } from 'reactstrap';

export default class MaxEffortInput extends Component{
    state={
        whatToShow:0,
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
                if(!isNaN(this.state.repsOne)&&
                    !isNaN(this.state.repsTwo)&&
                    !isNaN(this.state.repsThree)&&
                    !isNaN(this.state.repsFour)&&
                    !isNaN(this.state.repsFive)){
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
                    fetch("http://localhost:3000/maxeffort", newSet)
                    .then((res)=>{return res.json();})
                    .then(this.changeContent(1));
                }}}>
                Set One<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsOne:e.target.value})
                }}/><br/>
                Set Two<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsTwo:e.target.value})
                }}/><br/>
                Set Three<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsThree:e.target.value})
                }}/><br/>
                Set Four<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsFour:e.target.value})
                }}/><br/>
                Set Five<input className="inputMarg" type="number" min="0" onChange={(e)=>{
                    this.setState({repsFive:e.target.value})
                }}/><br/>
                <button className="homeButton" type='submit' onClick={()=>{    
                        this.getTotal();
                }}>Complete Set
                </button>
            </form>
        }else if(this.state.whatToShow === 1){
            this.content = 
                <p>This Session: 
                    &#40;1&#41;: {this.state.repsOne}, 
                    &#40;2&#41;: {this.state.repsTwo}, 
                    &#40;3&#41;: {this.state.repsThree}, 
                    &#40;4&#41;: {this.state.repsFour}, 
                    &#40;5&#41;: {this.state.repsFive}, 
                    Total: {this.state.total}
                </p>
                
        }
            
        return(
            <div>{this.content}</div>
        )
    }
}

{/* <Container className="maxEffFlex">
    <Row classname="maxEffPar">
        <Col xs={{ size: 'auto', offset: 5 }}>Set 1</Col>
        <Col xs={{ size: 'auto' }}>
            <input type="number" min="0" onChange={(e)=>{
            this.setState({repsOne:e.target.value})
            }}/>
        </Col>
    </Row>
    <Row classname="maxEffPar">
        <Col xs={{ size: 'auto', offset: 5 }}>Set 2</Col>
        <Col xs={{ size: 'auto' }}>
            <input type="number" min="0" onChange={(e)=>{
                this.setState({repsTwo:e.target.value})
            }}/>
        </Col>
    </Row>
    <Row classname="maxEffPar">
        <Col xs={{ size: 'auto', offset: 5 }}>Set 3</Col>
        <Col xs={{ size: 'auto' }}>
            <input type="number" min="0" onChange={(e)=>{
                this.setState({repsThree:e.target.value})
            }}/>
        </Col>
    </Row>
    <Row classname="maxEffPar">
        <Col xs={{ size: 'auto', offset: 5 }}>Set 4</Col>
        <Col xs={{ size: 'auto' }}>
            <input type="number" min="0" onChange={(e)=>{
                this.setState({repsFour:e.target.value})
            }}/>
        </Col>
    </Row>
    <Row classname="maxEffPar">
        <Col xs={{ size: 'auto', offset: 5 }}>Set 5</Col>
        <Col xs={{ size: 'auto' }}>
            <input type="number" min="0" onChange={(e)=>{
                this.setState({repsFive:e.target.value})
            }}/>
        </Col>
    </Row>
</Container> */}
{/* <container id="maxEffFlex">
    <div className="maxEffPar">
        <div>Set 1</div>
        <input type="number" onChange={(e)=>{
        this.setState({repsOne:e.target.value})
        }}/>
    </div>
    <div className="maxEffPar">
        <div>Set 2</div>
        <input type="number" onChange={(e)=>{
            this.setState({repsTwo:e.target.value})
        }}/>
    </div>
    <div className="maxEffPar">
        <div>Set 3</div>
        <input type="number" onChange={(e)=>{
            this.setState({repsThree:e.target.value})
        }}/>
    </div>
    <div className="maxEffPar">
        <div>Set 4</div>
        <input type="number" onChange={(e)=>{
            this.setState({repsFour:e.target.value})
        }}/>
    </div>
    <div className="maxEffPar">
        <div>Set 5</div>
        <input type="number" onChange={(e)=>{
            this.setState({repsFive:e.target.value})
        }}/>
    </div>
</container> */}

