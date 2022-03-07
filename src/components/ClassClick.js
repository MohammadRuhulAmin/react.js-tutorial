import React, { Component } from 'react'

 class ClassClick extends Component {
 clickEvent(){
     console.log("clicked from class");
 }
 
 constructor(){
     super();
 }
  render() {
    return (
     <div>
         <button onClick={this.clickEvent}>Click From Class </button>
     </div>
    )
  }
}

export default ClassClick