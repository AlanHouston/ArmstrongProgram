import React from 'react'

function PyramidSets(props){
    let showSets;
    if(props.date.length>0){
    showSets=this.state.date.map((d,i)=>{
        return <p key={i}>
        {d}:Trying {props.missed[i]}, Failed on: {props.last[i]}, Max: {props.max}, Total: {props.total}
        </p>
    }
    )}
    else showSets=<p>nope try again dumbass</p>

    return(
        <div>{showSets}</div>
    )
}



export default PyramidSets;