import React from 'react'

const Topping = ({ topping, selected }) => (
  <div>
    <h4>{topping.name}</h4>
    <h4>{topping.price}</h4>
    <h4>{selected}</h4>      
  </div>
)

export default Topping