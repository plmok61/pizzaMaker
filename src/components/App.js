import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Pizza from './Pizza'

import { connect } from 'react-redux'
import { fetchPizzas } from '../actions/pizzaActions'
import { addToCart } from '../actions/cartActions'
import { toggleTopping } from '../actions/toppingsActions'


class App extends Component {
  constructor() {
    super()
    this.fetchPizzas = this.fetchPizzas.bind(this)
  }

  fetchPizzas (size) {
    this.props.dispatch(fetchPizzas(size))
  }

  addToCart (pizza) {
    console.log('pizza: ',pizza)
    this.props.dispatch(addToCart(pizza))
  }

  toggleTopping () {
    this.props.dispatch(toggleTopping())
  }

  render () {
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pizza Time</h2>
        </div>
        
        {
          !this.props.pizzas
          ?
          <div>
            <button onClick={() => this.fetchPizzas("small")}>Small</button>
            <button onClick={() => this.fetchPizzas("medium")}>Medium</button>
            <button onClick={() => this.fetchPizzas("large")}>Large</button>
          </div>
          :
          <Pizza 
            size={this.props.pizzas.name}
            toppings={this.props.pizzas.toppings}
            maxToppings={this.props.pizzas.maxToppings}
            basePrice={this.props.pizzas.basePrice}
            addToCart={this.addToCart.bind(this)}
          />
        }
      </div>
    )
  }
}

const AppContainer = connect((store) => {
  return {
    pizzas: store.pizzas.pizzas
  }
})(App)

export default AppContainer

