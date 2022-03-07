import React, { Component } from 'react'

class Team extends Component {
    constructor(props){
        super(props);
        this.state = {
            list :[
                {
                    id:1,
                    name:"Ruhul Amin",
                    email :"Ruhul@gmail.com",
                    contact:"01322352864"
                },
                {
                    id:2,
                    name:"Sajid",
                    email :"sajid@gmail.com",
                    contact:"xx=xx=xx"
                },
                {
                    id:3,
                    name:"Sakib",
                    email :"Sakib@gmail.com",
                    contact:"xx-xxxxx-xx"
                },
            ]
        }
    }
    render() {
       
        return (
        <div>
            <select>
                {
                    this.state.list.map(inf=> <option key={inf.id}>   {inf.id} {inf.name} {inf.email} {inf.contact} </option> )
                }
            </select>
        </div>
        )
  }
}

export default Team