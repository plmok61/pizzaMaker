import React from 'react'


const Pizza = ({ size, toppings, maxToppings, basePrice, addToCart }) => (
  <div>
    <h3>{size}</h3>
    <h3>Max Toppings: {maxToppings || 'Unlimited!'}</h3>
    <h3>Pice: ${basePrice}</h3>
    {
      toppings.map((topping, key) => (
        <input type='checkbox' value={topping} key={key} />
      ))
    }
    <button onClick={()=> addToCart({size: size, price: basePrice})}>Add to Cart</button>
  </div>
)

export default Pizza