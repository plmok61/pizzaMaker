import React from 'react'
import CartItem from './CartItem'
import '../App.css'


const Cart = ({  pizzas }) => (
  <div className='cart'>
    <h2>Your Cart</h2>
    {
      pizzas.map((pizza, key) => (
        <CartItem 
          key={key}
          size={pizza.size}
          price={pizza.price}
          toppings={pizza.toppings}
        />
      ))
    }
  </div>
)

export default Cart