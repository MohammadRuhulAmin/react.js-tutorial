import React, { Component } from 'react';

class Eventbind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message :'HELLOW EVENT BINDING!'
    }
  }
    clickHandler(){
        this.setState({
            message:'Good Bye!'
        })
    }
    render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={this.clickHandler.bind(this)}>Click For Event Binding </button>
      </div>
    )
  }
}

export default Eventbind;