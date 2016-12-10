import React from 'react'
import '../App.css'


const CartItem = ({ size, price, toppings }) => {
  const selected = toppings.filter((topping) => (
    topping.defaultSelected
  ))
  console.log(selected)
  return (
    <div className='cart-item'>
      <p>{size}</p>
      <p>${price}</p>
      {
        selected.map((top) => (
          <p>{top.topping.name}</p>
        ))
      }
    </div>
  )
}

export default CartItem