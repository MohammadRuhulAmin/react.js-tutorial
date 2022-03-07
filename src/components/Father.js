import React, { Component } from 'react'
import Daughter from './Daughter'
class Father extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'Ashraful Islam'
        }
        this.daughterName = this.daughterName.bind(this);
    }
    daughterName(child){
        alert(`${this.state.name} ${child}`)
    }
  render() {
    return (
      <div>
          <Daughter myDaughter = {this.daughterName} />      
      </div>
    )
  }
}
export default Father