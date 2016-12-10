import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import Pizza from './Pizza'
import OrderTotal from './OrderTotal'

import { connect } from 'react-redux'
import { fetchPizza } from '../actions/pizzaActions'
import { addToCart } from '../actions/cartActions'
import { toggleTopping } from '../actions/toppingsActions'


class App extends Component {
  constructor() {
    super()
    this.state = {
      addForm: true,
      cart: [],
      total: 0,
    }
    this.fetchPizza = this.fetchPizza.bind(this)
    //this.toggleTopping = this.toggleTopping.bind(this)
    this.addToCart = this.addToCart.bind(this)
  }

  fetchPizza (size) {
    this.props.dispatch(fetchPizza(size))
    this.setState({addForm: false})
  }

  addToCart (pizza) {
    console.log('pizza: ',pizza)
    let newCart = this.state.cart
    newCart.push(pizza)

    let newTotal = newCart.reduce(function(acc, item) {
      return acc + item.price
    }, 0)
    this.setState({
      cart: newCart,
      addForm: true,
      total: newTotal,
    })
    //Redux code I could not get working
    //this.props.dispatch(addToCart(pizza))
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
        <div>
          <button onClick={() => this.fetchPizza("small")}>Small</button>
          <button onClick={() => this.fetchPizza("medium")}>Medium</button>
          <button onClick={() => this.fetchPizza("large")}>Large</button>
        </div>
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

