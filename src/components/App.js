import React, { Component } from 'react'
import '../App.css'
import axios from 'axios'
import Pizza from './Pizza'
import OrderTotal from './OrderTotal'
import Cart from './Cart'
import SizeButtons from './SizeButtons'

import { connect } from 'react-redux'
import { fetchPizza } from '../actions/pizzaActions'
import { addToCart } from '../actions/cartActions'
import { toggleTopping } from '../actions/toppingsActions'


class App extends Component {
  constructor() {
    super()
    this.state = {
      cart: [],
      total: 0,
      sizes: [],
    }
    this.fetchPizza = this.fetchPizza.bind(this)
    //this.toggleTopping = this.toggleTopping.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.removeFromCart = this.removeFromCart.bind(this)
    this.fetchSizes = this.fetchSizes.bind(this)
  }

  componentDidMount () {
    this.fetchSizes()
  }

  fetchSizes () {
    axios.get(`https://core-graphql.dev.waldo.photos/pizza?query={pizzaSizes{name}}`,
      {
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        withCredentials: false
      })
      .then((response) => {
        let sizes = response.data.data.pizzaSizes.map((size) => size.name)
        this.setState({sizes: sizes})
      })
      .catch((error) => {
        console.log('Error getting pizza: ', error)
      })
  }  

  //The one thing in here using Redux
  fetchPizza (size) {
    this.props.dispatch(fetchPizza(size))
  }

  addToCart (pizza) {
    //Check to make sure the pizza does not have
    //too many toppings
    let toppingsCount = 0
    for(var i = 0; i < pizza.toppings.length; i++) {
      if (pizza.toppings[i].defaultSelected) {
        toppingsCount++
      }
    }

    if (toppingsCount > pizza.maxToppings) {
      const toRemove = toppingsCount - pizza.maxToppings
      return alert(`Please remove ${toRemove} topping(s)`)
    }

    let newCart = this.state.cart
    newCart.push(pizza)

    let newTotal = newCart.reduce(function(acc, item) {
      return acc + item.price
    }, 0)
    this.setState({
      cart: newCart,
      total: newTotal,
    })
    //Redux code I could not get working
    //this.props.dispatch(addToCart(pizza))
  }

  removeFromCart (index) {
    let cart = this.state.cart
    cart.splice(index, 1)

    let newTotal = cart.reduce(function(acc, item) {
      return acc + item.price
    }, 0)

    this.setState({
      cart: cart,
      total: newTotal,
    })
  }

  //Redux code to toggle toppings I could not get working
  // toggleTopping (selected) {
  //   console.log('selected? ',selected)
  //   this.props.dispatch(toggleTopping(selected))
  // }

  render () {
  
    return (
      <div className="App">
        <div className="App-header">
          <h2>Pizza Time</h2>
        </div>
        <OrderTotal total={this.state.total}/>
        <SizeButtons 
          sizes={this.state.sizes}
          fetchPizza={this.fetchPizza}
        />
        {
          !this.props.pizza
          ?
          <h2>Select a size</h2>
          :
          <Pizza 
            size={this.props.pizza.name}
            toppings={this.props.pizza.toppings}
            maxToppings={this.props.pizza.maxToppings}
            basePrice={this.props.pizza.basePrice}
            addToCart={this.addToCart}
          />
        }
        <Cart 
          pizzas={this.state.cart}
          removeFromCart={this.removeFromCart}
        />
      </div>
    )
  }
}

const AppContainer = connect((store) => {
  return {
    pizza: store.pizza.pizza
  }
})(App)

export default AppContainer

