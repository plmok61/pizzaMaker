import React from 'react'
import CartItem from './CartItem'
import '../App.css'


const Cart = ({  pizzas, removeFromCart }) => (
  <div className='cart'>
    <h2>Your Cart</h2>
    {
      pizzas.map((pizza, key) => (
        <CartItem 
          key={key}
          index={key}
          size={pizza.size}
          price={pizza.price}
          toppings={pizza.toppings}
          removeFromCart={removeFromCart}
        />
      ))
    }
  </div>
)

export default Cart