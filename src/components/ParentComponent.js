import React, { Component } from 'react'
import ChildComponent from './ChildComponent';
 class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.changeMessage = this.changeMessage.bind(this);
    }
    changeMessage(){
        alert(`Hi message Chanign!`);
    }

  render() {
    return (
        <div>
            <ChildComponent myFunction = {this.changeMessage}/>
        </div>
    )
  }
}

export default ParentComponent