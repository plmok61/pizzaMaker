import React from 'react'
import Topping from './Topping'

const Pizza = ({ size, toppings, maxToppings, basePrice, addToCart }) => (
  <div>
    <h3>{size}</h3>
    <h3>Max Toppings: {maxToppings || 'Unlimited!'}</h3>
    <h3>Pice: ${basePrice}</h3>
    {
      toppings.map((t, key) => (
        <Topping 
          key={key}
          topping={t.topping}
          selected={t.defaultSelected}
        />
      ))
    }
    <button onClick={()=> addToCart({size: size, price: basePrice})}>Add to Cart</button>
  </div>
)

export default Pizza