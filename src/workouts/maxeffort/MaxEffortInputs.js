import React from 'react';

function MaxEffortInputs(){
    let setComplete=false;
    let content;
    if(setComplete===false){
        content=
            <form onSubmit={(e)=>{
                e.preventDefault();
                let newSet={
                    //recreate the 'create' function here?
                }

                fetch("http://localhost:3000/maxeffort", {
                    method:"POST",
                    headers: {"Content-Type": "application/json"},
                    //if fetch goes here, where does newSet go?? And how!?
                    //would I store all five sets in a variable, then send to db once all are inputted?
                })
                }}>
                <input onChange={(e)=>{
                let reps=e.target.value;
                this.setState({sets:[...this.sets,reps]})
                }}/>
                <button type='submit' onClick={()=>{
                    //code to change render to show just the sets
                }}></button>
            </form>
        
        setComplete=true;
    }
    //props.set

    
    return(
        <div>{content}</div>
    )
}

export default MaxEffortInputs;