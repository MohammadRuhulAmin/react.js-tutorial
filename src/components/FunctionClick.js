import React from 'react'

function FunctionClick() {
    function clickEvent()
    {
        console.log("ok Event is fired");
    }
  return (
    <div>
        <button onClick={clickEvent}>Click From Function </button>
    </div>
  )
}

export default FunctionClick