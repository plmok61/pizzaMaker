import React from 'react'

const Topping = ({ topping, selected, toggleTopping }) => (
  <div>
    <h4>{topping.name}</h4>
    <h4>${topping.price}</h4>
    <input 
      type='checkbox'
      checked={selected}
      onChange={()=> toggleTopping(selected)}
    />     
  </div>
)

export default Topping