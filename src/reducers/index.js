import { combineReducers } from 'redux'

import pizza from './pizzaReducer'
import cart from './cartReducer'
import toppings from './toppingsReducer'

export default combineReducers({
  cart,
  pizza,
  toppings,
})
