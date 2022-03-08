import React, { Component } from 'react'

class Form4 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         userEmail:'',
      }
    }
    handleUserName = (event)=>{
        this.setState({
            userName : event.target.value 
        });
    }
    handleUserEmail = (event)=>{
        this.setState({
            userEmail : event.target.value 
        })
    }
    submitForm = (event)=>{
        alert(`${this.state.userName} ${this.state.userEmail}`)
        event.preventDefault();
    }
  render() {
      const {userName , userEmail} = this.state; 
    return (
     <div>
      <form onSubmit={this.submitForm}>
        <div>
            <label>User Name </label>
            <input  type="text" onChange={this.handleUserName}  value={userName}  />
        </div>
        <div>
            <label>User Email </label>
            <input  type="text" onChange={this.handleUserEmail} value={userEmail}  />
        </div>
        <button> Click For Registration </button>
      </form>
     </div>
    )
  }
}
export default Form4