import React, { Component } from 'react'

class ConditionalRendering extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn : true,
       userName : "Md Ruhul Amin"
    }
  }
    render() {
        let message = "";
        if(this.state.isLoggedIn == true)message = <div>Welcome {this.state.userName}</div>
        else message = <div>Welcome As a Guest!</div>
        return (
        <div> {message}</div>
        )
  }
}

export default ConditionalRendering