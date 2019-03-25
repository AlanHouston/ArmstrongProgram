import React from 'react'

function GripSwitchSets(props){
    let showSets;
    if(props.date.length>0){
        showSets=props.date.map((d,i)=>{
            return <p key={i}>
            {d}: Overhand Reps: {props.overHandReps[i]}, 
            Inward Facing Reps: {props.inwardReps[i]}, 
            Wide Grip Reps: {props.wideReps[i]}, 
            Total sets of each: {props.numberOfSets[i]}, 
            Total: {props.total[i]}
            </p>
        }
        )}
        else showSets=<p>No Past Data Available</p>

        return(
            <div>{showSets}</div>
        )
}

export default GripSwitchSets;