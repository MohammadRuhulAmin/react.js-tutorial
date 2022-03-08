import React, { Component } from 'react'
class LifecycleAA extends Component {
    constructor(props) {
      super(props)
      this.state = {
         name :'Md Ruhul Amin',
      }
      console.log("Calling from Constructor")  
    }
    static getDerivedStateFromProps(props,state){
        console.log("get derivedstate form props")
        return null;
    }
    componentDidMount(){
        console.log("componentDidMount");
    }
    
    render() {
        console.log("render")
    return (
      <div>LifecycleAA</div>
    )
  }
}

export default LifecycleAA