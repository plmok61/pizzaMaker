import React, { Component } from 'react'
import '../App.css'
import Topping from './Topping'

export default class Pizza extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toppings: this.props.toppings,
      toppingsCount: 0,
      pizzaTotal: 0,
    }
    this.countToppings = this.countToppings.bind(this)
  }

  componentDidMount () {
    //Add up the cost of the default toppings
    const total = this.props.toppings.reduce((acc, t) => {
      if (t.defaultSelected) {
        acc = acc + t.topping.price
      }
      return acc
    },0)
    console.log('total: ',total)

    // Set our initial topping count
    this.countToppings(this.props.toppings)

    this.setState({pizzaTotal: total + this.props.basePrice})
  }

  countToppings (toppings) {
    const toppingCount = toppings.reduce((acc,t) => {
      if (t.defaultSelected) {
        acc = acc++
      }
      return acc
    },0)
    this.setState({toppingCount: toppingCount})
  }

  toggleTopping (selector) {

  }

  render () {

    const { size, toppings, maxToppings, basePrice, addToCart } = this.props

    return (
      <div className='pizzaWrap'>
        <h3>Size: {size}</h3>
        <h3>Max Toppings: {maxToppings || 'Unlimited!'}</h3>
        <h3>Pice: ${this.state.pizzaTotal}</h3>
        {
          this.state.toppings.map((t, key) => (
            <Topping 
              key={key}
              topping={t.topping}
              selected={t.defaultSelected}
              toggleTopping={this.toggleTopping}
            />
          ))
        }
        <button onClick={()=> addToCart({size: size, price: basePrice})}>Add to Cart</button>
      </div>
    )
  }
} 

// Code from when I tried to solve with Redux with a stateless componenet

// const Pizza = ({ size, toppings, maxToppings, basePrice, addToCart, toggleTopping }) => (
//   <div className='pizzaWrap'>
//     <h3>Size: {size}</h3>
//     <h3>Max Toppings: {maxToppings || 'Unlimited!'}</h3>
//     <h3>Base Pice: ${basePrice}</h3>
//     {
//       toppings.map((t, key) => (
//         <Topping 
//           key={key}
//           topping={t.topping}
//           selected={t.defaultSelected}
//           toggleTopping={toggleTopping}
//         />
//       ))
//     }
//     <button onClick={()=> addToCart({size: size, price: basePrice})}>Add to Cart</button>
//   </div>
// )

// export default Pizza