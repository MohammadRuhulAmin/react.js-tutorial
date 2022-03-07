import React from 'react'

function Daughter(props) {
  return (
    <div>
        <button onClick={()=>props.myDaughter("Aynun")}>Daughter </button>
    </div>
  )
}

export default Daughter