import React, { Component } from 'react'
import LB from './LB';

 class LA extends Component {
     constructor(props) {
       super(props)
       this.state = {
       }
       console.log("LA => constructor");
     }
     static getDerivedStateFromProps(props,state){
        console.log("LA => getDerivedStatFromProps");
        return null;
     }

     componentDidMound(){
         console.log("LA = > componentDidMount");
     }
     shouldComponentUpdate(){
         console.log('LA should component update')
         return true;
     }
     getSnapshotBeforeUpdate(prevProps, prevState){
         console.log('LA this.getSnapshotBeforeUpdate')
         return null;
     }
     componentDidUpdate(){
         console.log("LA component did update");
     }
  render() {
      console.log("LA => render")
    return (
      <div>
        <LB/>    
      </div>
     
    )
  }
}

export default LA