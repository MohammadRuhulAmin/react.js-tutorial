import React from 'react'

function ListRendering() {
  const names = ["Aynun Jariya Mariyam" , "Ruhul Amin" , "Nurul Islam", "Sakib"];

  return (
   <div>
       {
           names.map(name =><div>{name}</div>)
       }
   </div>
  )
}

export default ListRendering