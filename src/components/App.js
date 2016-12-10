import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Pizza from './Pizza'

import { connect } from 'react-redux'
import { fetchPizzas } from '../actions/pizzaActions'
import { addToCart } from '../actions/cartActions'
import { toggleTopping } from '../actions/toppingsActions'


class App extends Component {

  fetchPizzas () {
    this.props.dispatch(fetchPizzas())
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
          !this.props.pizzas.length ?

          <button onClick={this.fetchPizzas.bind(this)}>Start Order</button> :

          this.props.pizzas.map((pizza, key) => (
            <Pizza 
              size={pizza.name}
              toppings={pizza.toppings}
              maxToppings={pizza.maxToppings}
              basePrice={pizza.basePrice}
              key={key}
              addToCart={this.addToCart.bind(this)}
            />
          ))
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

