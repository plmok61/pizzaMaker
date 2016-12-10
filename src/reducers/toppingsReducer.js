const toppingsState = {
  defaultSelected: false
}


export default function reducer (state=toppingsState, action) {
  switch(action.type) {
    case "TOGGLE_TOPPING" : {
      return {
        ...state,
        defaultSelected: !action.payload
      }
    }
  }
  return state
}