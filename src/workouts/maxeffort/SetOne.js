import React from 'react'

function SetOne(props){
    let content=(
        <div>
            <input onChange={(e)=>{
            e.preventDefault();
            let reps=e.target.value;
            props.sets.push(reps);
            
            
            
            }}
            />
            <input type="submit" onSubmit={(e)=>{
                e.preventDefault();
                
            }}/>
        </div>
    )
    return (
        
    );
}

export default SetOne;