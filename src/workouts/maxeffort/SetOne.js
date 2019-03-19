import React from 'react'

function SetOne(props){
    let content=(
        <form onSubmit={(e)=>{e.preventDefault()}}>
            <input onChange={(e)=>{
            let reps=e.target.value;
            this.setState({sets:[...this.sets,reps]})
            //remove component so can set local state in MaxEffort!
            }}/>
            <input type='submit' onClick={()=>{
                content=props.sets[0]
            }}></input>
        </form>
        
    )
    return (
        <div>
            {content}
        </div>
    );
}

export default SetOne;