import React from 'react';

export function DaySelectorHome(props){
    
    return (
        <div className="App">
        {/* instructions here - 'on day five, choose the workout that was the hardest from the week, it may change from week to week'*/}
        <button onClick={()=>props.changeView(1)}>Day 1 : Max Effort</button>
        <br/>
        <button onClick={()=>props.changeView(2)}>Day 2 : Pyramid</button>
        <br/>
        <button onClick={()=>props.changeView(3)}>Day 3 : Grip Switch</button>
        <br/>
        <button onClick={()=>props.changeView(4)}>Day 4 : Max Day</button>
        <br/>
        <p>On Day 5, repeat the workout you felt was hardest each week</p>
        {/* <button onClick={()=>props.changeView(5)}>Day 5 : Hardest</button> */}
    </div>
    );
}

export default DaySelectorHome