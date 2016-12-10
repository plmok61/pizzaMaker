import axios from 'axios'

// Query to get all pizzas
// {pizzaSizes{name,maxToppings,basePrice,toppings{,defaultSelected,topping{name,price}}}}

export function fetchPizza (size) {
  return function (dispatch) {
    axios.get(`https://core-graphql.dev.waldo.photos/pizza?query={pizzaSizeByName(name:"${size}"){name,maxToppings,basePrice,toppings{defaultSelected,topping{name,price}}}}`,
      {
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        withCredentials: false
      })
      .then((response) => {
        console.log(response)
        dispatch({type: 'FETCH_PIZZA_FULFILLED', payload: response.data.data.pizzaSizeByName})
      })
      .catch((error) => {
        console.log('Error getting pizza: ', error)
        dispatch({type: 'FETCH_PIZZA_REJECTED', payload: error})
      })
  }
}

