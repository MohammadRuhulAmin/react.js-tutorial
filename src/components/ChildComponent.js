import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        <button onClick={props.myFunction}>Click for parent Child </button>
    </div>
  )
}

export default ChildComponent