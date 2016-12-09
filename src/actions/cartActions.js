export function addToCart (pizza) {
  return {
    type: 'ADD_TO_CART',
    payload: pizza,
  }
}