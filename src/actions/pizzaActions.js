import axios from 'axios'

export function fetchPizzas () {
  return function (dispatch) {
    axios.get('https://core-graphql.dev.waldo.photos/pizza?query={pizzaSizes{name,maxToppings,toppings{defaultSelected},basePrice}}',
      {
        headers: {'X-Requested-With': 'XMLHttpRequest'},
        withCredentials: false
      })
      .then((response) => {
        console.log(response)
        dispatch({type: 'FETCH_PIZZAS_FULFILLED', payload: response.data.data.pizzaSizes})
      })
      .catch((error) => {
        console.log('Error getting pizza: ', error)
        dispatch({type: 'FETCH_PIZZAS_REJECTED', payload: error})
      })
  }
}