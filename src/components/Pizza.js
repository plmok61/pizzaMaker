import React, { Component } from 'react'
import '../App.css'
import Topping from './Topping'

export default class Pizza extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toppings: [],
      toppingsCount: 0,
      maxToppings: 0,
      pizzaTotal: 0,
      basePrice: 0,
    }
    this.countToppings = this.countToppings.bind(this)
    this.toggleTopping = this.toggleTopping.bind(this)
    this.calcPizzaPrice = this.calcPizzaPrice.bind(this)
  }

  componentDidMount () {
    this.setState({
      toppings: this.props.toppings,
      maxToppings: this.props.maxToppings,
      basePrice: this.props.basePrice,
    })

    this.calcPizzaPrice(this.props.toppings)

    // Set initial topping count
    this.countToppings(this.props.toppings)
  }

  calcPizzaPrice (toppings) {
    //Add up the cost of the default toppings
    const total = toppings.reduce((acc, t) => {
      if (t.defaultSelected) {
        acc = acc + t.topping.price
      }
      return acc
    },0)
    // Set initial pizza total
    this.setState({pizzaTotal: total + this.props.basePrice})
  }

  countToppings (toppings) {
    const toppingsCount = toppings.reduce((acc,t) => {
      if (t.defaultSelected) {
        acc++
      }
      return acc
    },0)

    this.setState({toppingsCount: toppingsCount})
  }

  
  toggleTopping (name) {

    let toppings = this.state.toppings
    let index = -1
    // Finds the index of the topping by its name
    for (var i = 0; i < toppings.length; i++) {
      if(toppings[i].topping.name === name) {
        index = i
        break
      }
    }

    //check to make sure max toppings has not been met
    //only allow deselecting if it has
    if(this.state.toppingsCount === this.props.maxToppings &&
      !this.state.toppings[index].defaultSelected) {
      return 
    }

    //Switch its defaultSelected
    let topping = this.state.toppings[index]
    topping.defaultSelected = !topping.defaultSelected

    //recount the toppings selected
    this.countToppings(this.state.toppings)

    //update the pice
    this.calcPizzaPrice(this.state.toppings)
  }

  render () {

    const { size, toppings, maxToppings, basePrice, addToCart } = this.props

    return (
      <div className='pizzaWrap'>
        <h3>Size: {size}</h3>
        <h3>Max Toppings: {maxToppings || 'Unlimited!'}</h3>
        <h3>Base Pice: ${basePrice}</h3>
        <h3>Total: ${this.state.pizzaTotal}</h3>
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
        <button onClick={()=> addToCart({size: size, price: this.state.pizzaTotal, maxToppings: maxToppings, toppings: this.state.toppings})}>Add to Cart</button>
      </div>
    )
  }
} 
