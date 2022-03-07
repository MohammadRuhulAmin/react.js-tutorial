import React, { Component } from 'react'

class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         personInfo :[
             {
                 name:"Aynun Jariya Mariam ",
                 age :1.5,
                 birthdate :"1-6-2020"
             },
             {
                 name : "Ruhul Amin",
                 age : 26,
                 birthdate :"6-7-1997"
             },
             {
                name : "Ashraful Islam",
                age : 30,
                birthdate :"6-7-1991"
            },
         ]
      }
    }
  render() {
    return (
      <div>
        <select>
            {
                this.state.personInfo.map(info => <option>{info.name} {info.age} {info.birthdate}</option>)
            }
        </select>
      </div>
    )
  }
}

export default Person