const pizzaState = {
  pizzas: [],
  fetching: false,
  fetched: false,
  error: null,
  currentPizza: {
    size: null,
    maxToppings: null,
    toppings: [],
    price: null,
  },
}

export default function reducer (state=pizzaState, action) {
  switch(action.type) {
    case "FETCH_PIZZAS" : {
      return {...state, fetching: true,}
    }
    case "FETCH_PIZZAS_REJECTED" : {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_PIZZAS_FULFILLED" : {
      return {
        ...state,
        fetching: false,
        fetched: true,
        pizzas: action.payload,
      }
    }
  }
  return state
}