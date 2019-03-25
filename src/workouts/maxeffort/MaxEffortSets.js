import React from 'react'

function MaxEffortSets(props){
    let showSets;
    if(props.date.length>0){
        showSets=props.date.map((d,i)=>{
            return <p key={i}>
            {d}: One: {props.setOne[i]}, 
            Two: {props.setTwo[i]}, 
            Three: {props.setThree[i]}, 
            Four: {props.setFour[i]}, 
            Five: {props.setFive[i]}, 
            Total: {props.total[i]}
            </p>
        }
        )}
        else showSets=<p>No Past Data Available</p>

        return(
            <div>{showSets}</div>
        )
}

export default MaxEffortSets;