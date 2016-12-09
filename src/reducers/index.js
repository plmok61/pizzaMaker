import { combineReducers } from 'redux'

import pizzas from './pizzaReducer'
import cart from './cartReducer'


export default combineReducers({
  cart,
  pizzas,
})
