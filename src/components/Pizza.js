import React from 'react'

const Pizza = ({ size, toppings, maxToppings, basePrice }) => (
  <div>
    <h3>{size}</h3>
    <h3>{maxToppings}</h3>
    <h3>{basePrice}</h3>
  </div>
)

export default Pizza