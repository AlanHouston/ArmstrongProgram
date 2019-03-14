import React, { Component } from 'react';


class MaxEffort extends Component{
    sets=[]
    
    render(){
        // let whatToShow;
        // if(this.state.whichSet === 1 && this.state.one === 0){
        //     whatToShow=(
        //         <form>
        //             <div>
        //                 Set One
        //                 <input onChange={(e)=>{
        //                     e.preventDefault();
        //                     let newSet=this.state.whichSet+1;
        //                     const one = {one: e.target.value}
        //                     // this.sets.one=e.target.value;
        //                     this.setState({
        //                         one: Object.assign(this.state.one, one),
        //                         whichSet:newSet
        //                     })
        //                 }}
        //                 />
        //                 <input type="submit" onSubmit={(e)=>{
        //                 e.preventDefault();
        //                 whatToShow = this.state.one
        //                 }}/>
        //             </div>
        //         </form>
        //     )
        // }

        //dont need to keep the set count, just count in array
        //package to associate data with calendar 
         //change day one to 'day one: max effort'
        
    return (
        <div className="App">
            <h1>DAY 1: MAX EFFORT</h1>
            <h3>5 max effort sets</h3>
            <h2>REST</h2>
            <h3>90 seconds</h3>
            {/* <div>{whatToShow}</div> */}
            {/* <div>Set 1 {setOne}</div>
            <div>Set 2 {setTwo}</div>
            <div>Set 3 {setThree}</div>
            <div>Set 4 {setFour}</div>
            <div>Set 5 {setFive}</div> */}
        </div>
    );
    }
}

export default MaxEffort;

// let setOne=
//         <form>
//             <div>
//                 <input onChange={(e)=>{
//                     e.preventDefault();
//                     let newSet=this.state.whichSet+1;
//                     const one = {one: e.target.value}
//                     this.sets.one=e.target.value;
//                     this.setState({
//                         one: Object.assign(this.state.one, one),
//                         whichSet:newSet
//                     })
//                 }}
//                 />
//                 <input type="submit" onSubmit={(e)=>{
//                     e.preventDefault();
//                     setOne = this.state.one
//                 }}/>
//             </div>
//         </form>

//         let setTwo=
//         <form>
//             <div>
//                 <input onChange={(e)=>{
//                     e.preventDefault();
//                     let newSet=this.state.whichSet+1
//                     this.setState({
//                         two:e.target.value,
//                         whichSet:newSet
//                     })
//                 }}
//                 />
//                 <input type="submit"/>
//             </div>
//         </form>