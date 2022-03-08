import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Md Ruhul Amin'
      }
      console.log('Lifecycle A Constructor!')
    }
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleA getDerivedStateFromProps');
        return null;
    }
    componentDidMount(){
        console.log("LifecycleA ComponentDidMount ");
    }
  render() {
      console.log("LifecycleA Render ")
    return (
      <div>LifecycleA</div>
    )
  }
}

export default LifecycleA