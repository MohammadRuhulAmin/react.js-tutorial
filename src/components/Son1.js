import React from 'react'

function Son1(props) {
  return (
    <div>
        <button onClick={()=>props.son("Ashraful")}>SON_1</button>
    </div>
  )
}

export default Son1