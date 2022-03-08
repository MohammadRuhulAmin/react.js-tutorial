import React from 'react'
function Actor(props){
    return(
        <div>
             <h1>Hi {props.name} You are {props.heroName}</h1>
             <b>{props.child}</b>
        </div>
    )
}

export default Actor;