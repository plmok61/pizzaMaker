import React from 'react'
import '../App.css'


const CartItem = ({ size, price, toppings, index, removeFromCart }) => {
  const selected = toppings.filter((topping) => (
    topping.defaultSelected
  ))
  return (
    <div className='cart-item'>
      <p>{size}</p>
      <p>${price}</p>
      {
        selected.map((top, key) => (
          <p key={key}>{top.topping.name}</p>
        ))
      }
      <button onClick={() => removeFromCart(index)}>Remove</button>
    </div>
  )
}

export default CartItem