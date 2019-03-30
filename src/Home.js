import React from 'react'

function Home(props){
    return (
        <div className="App">
            <button onClick={()=>props.changeView(1)}>Pull Ups!</button>
            <br/>
            <button onClick={()=>props.changeView(2)}>Push Ups!</button>
            {/* <br/>
            <button onClick={()=>props.changeView(2)}>Stats!</button> */}
        </div>
    );
}

export default Home;
