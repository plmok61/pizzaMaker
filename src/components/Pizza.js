import React from 'react'
import '../App.css'
import Topping from './Topping'

const Pizza = ({ size, toppings, maxToppings, basePrice, addToCart, toggleTopping }) => (
  <div className='pizzaWrap'>
    <h3>Size: {size}</h3>
    <h3>Max Toppings: {maxToppings || 'Unlimited!'}</h3>
    <h3>Base Pice: ${basePrice}</h3>
    {
      toppings.map((t, key) => (
        <Topping 
          key={key}
          topping={t.topping}
          selected={t.defaultSelected}
          toggleTopping={toggleTopping}
        />
      ))
    }
    <button onClick={()=> addToCart({size: size, price: basePrice})}>Add to Cart</button>
  </div>
)

export default Pizza