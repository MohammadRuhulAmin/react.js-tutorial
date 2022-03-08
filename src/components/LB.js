import React, { Component } from 'react'
class LB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      
      }
      console.log("LB => constructor ")
    }
    static getDerivedStateFromProps(props,state){
        console.log("LB = > getDerivedStateFromProps");
        return null;
    }
    componentDidMount(){
        console.log("LB = >componentDidMount")
    }
  render() {
      console.log("LB => render")
    return (
      <div>LB</div>
    )
  }
}
export default LB