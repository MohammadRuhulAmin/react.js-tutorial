import React, { Component } from 'react'

export class Form2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username :'',
         useremail :'',
         usercontact:'',
         useraddress:'',
         userdetails:'',
         topic:'react',
      }
    }
    huserName = (event)=>{
        this.setState({
            username : event.target.value ,
           
        })
    }
    huserEmail = (event)=>{
        this.setState({
            useremail :event.target.value , 
        })
    }
    huserContact = (event)=>{
        this.setState({
            usercontact:event.target.value, 
        })
    }
    huserAddress = (event)=>{
        this.setState({
            useraddress:event.target.value 
        })
    }
    huserDetails = (event)=>{
        this.setState({
            userdetails:event.target.value 
        });
    }
    submitForm = (event)=>{
        alert(`${this.state.username} ${this.state.useremail} ${this.state.usercontact} ${this.state.topic}`)
        event.preventDefault();
    }
    changelang = (event)=>{
        this.setState({
            topic:event.target.value 
        })
    }
  render() {
    return (
      <div>
          <label><h4>User Registration Form !! </h4></label>
          <form onSubmit={this.submitForm}>
                <div>
                    <label>User Name </label>
                    <input type="text"  onChange={this.huserName} value={this.state.username} />
                    <h1> {this.state.username}</h1>
                </div>
                <div>
                    <label>User Email </label>
                    <input type="text" onChange={this.huserEmail} value={this.state.useremail} />
                </div>
                <div>
                    <label>User Contact </label>
                    <input type="text" onChange={this.huserContact} value={this.state.usercontact} />
                </div>
                <div>
                    <label>User Address </label>
                    <input type="text" onChange={this.huserAddress} value={this.state.useraddress} />
                </div>
                <div>
                    <label>User Details </label>
                    <input type="text" onChange={this.huserDetails} value={this.state.userdetails}/>
                </div>
                <div>
                    <select onChange={this.changelang} value={this.state.topic}>
                        <option value="react">React</option>
                        <option value="nodejs">Node js</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <button>Hit Button </button>
          </form>
      </div>
    )
  }
}

export default Form2