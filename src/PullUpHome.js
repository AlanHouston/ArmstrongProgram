import React from 'react';

export default function PullUpHome(props){
    
    return (
        <div className="App">
        {/* instructions here - 'on day five, choose the workout that was the hardest from the week, it may change from week to week'*/}
        <button className="buttonStyle" onClick={()=>props.changePullUpView(1)}>Day 1 : Max Effort</button>
        <br/>
        <button className="buttonStyle" onClick={()=>props.changePullUpView(2)}>Day 2 : Pyramid</button>
        <br/>
        <button className="buttonStyle" onClick={()=>props.changePullUpView(3)}>Day 3 : Grip Switch</button>
        <br/>
        <button className="buttonStyle" onClick={()=>props.changePullUpView(4)}>Day 4 : Max Day</button>
        <br/>
        <p>On Day 5, repeat the workout you felt was hardest</p>
        <p>This may change from week to week</p>
    </div>
    );
}