import { combineReducers } from 'redux'

import pizzas from './pizzaReducer'
import cart from './cartReducer'
import toppings from './toppingsReducer'

export default combineReducers({
  cart,
  pizzas,
  toppings,
})
