import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'

import { connect } from 'react-redux'
import { fetchPizzas } from '../actions/pizzaActions'


class App extends Component {

  fetchPizzas () {
    this.props.dispatch(fetchPizzas())
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

          this.props.pizzas.map(pizza => <div>{pizza.name}</div>)
        }
      </div>
    )
  }
}

const AppContainer = connect((store) => {
  return {
    pizzas: store.pizzas
  }
})(App)

export default AppContainer

