import React from 'react'
import './mystyle.css'


function Stylesheet(props) {
    var className = props.isLoggedIn?'primary':''
  return (
    <div>
        <h1 className={`${className} font-xl`}>Style Sheet </h1>
    </div>
  )
}

export default Stylesheet