import React, { Component } from 'react'

class ListRenderingclass extends Component {
    constructor(){
        super();
        this.state = {
            names :["Aynun Jariya Mariam Binte Ashraf" , "Sakib" , "Sajid" , "Ashraf"]
        }
    }
  render() {
    // names =["Aynun Jariya Mariam Binte Ashraf" , "Sakib" , "Sajid" , "Ashraf"]
    return (
      <div>
          <select>
              {
                  this.state.names.map(name=><option>{name}</option>)
              }
          </select>
      </div>
    )
  }
}

export default ListRenderingclass