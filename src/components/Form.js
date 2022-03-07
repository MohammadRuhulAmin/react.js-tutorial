import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
      }
    }
    handleUserNameChange = (event)=>{
        this.setState({
            username:event.target.value 
        })
    }
  render() {
    return (
      <div>
        <form>
            <div>
                <div>
                    <label> User Name </label>
                    <input type='text' onChange={this.handleUserNameChange} value={this.state.username}/>
                </div>
            </div>
            
        </form>
      </div>
    )
  }
}

export default Form