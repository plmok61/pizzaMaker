const pizzaState = {
  pizza: false,
  fetching: false,
  fetched: false,
  error: null,
}

export default function reducer (state=pizzaState, action) {
  switch(action.type) {
    case "FETCH_PIZZA" : {
      return {...state, fetching: true,}
    }
    case "FETCH_PIZZA_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_PIZZA_FULFILLED" : {
      return {
        ...state,
        fetching: false,
        fetched: true,
        pizza: action.payload,
      }
    }
  }
  return state
}