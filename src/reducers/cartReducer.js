const cartState = {
  cart: []
}

export default function reducer (state=cartState, action) {
  switch(action.type) {
    case "ADD_TO_CART" : {
      return {...state, cart: action.payload, }
    }
  }
  return state
}