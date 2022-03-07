import React, { Component } from 'react'
import Son1 from './Son1';
class Ourfather extends Component {
  constructor(){
      super();
      this.state = {
          fatherName:"Md Nurul Islam"

        }
        this.son1Info = this.son1Info.bind(this);
  }
  son1Info(sonName){
      alert(`${this.state.fatherName} has a son name ${sonName} `)
  }
  render() {
    return (
      <div>
          <Son1 son = {this.son1Info} />
      </div>
    )
  }
}

export default Ourfather