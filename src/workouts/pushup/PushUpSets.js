import React from 'react'

export default function PushUpSets(props){
    let showSets;
    if(props.date.length>0){
        showSets=props.date.map((d,i)=>{
            return <p key={i}>
            {d}: One: {props.one[i]}, 
            Two: {props.two[i]}, 
            Three: {props.three[i]}, 
            Total: {props.total[i]}
            </p>
        }
        )}
        else showSets=<p>No Past Data Available</p>

        return(
            <div>{showSets}</div>
        )
}

