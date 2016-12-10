const toppingsState = {
  defaultSelected: false
}

export default function reducer (state=toppingsState, action) {
  switch(action.type) {
    case "TOGGLE_TOPPING" : {
      if (state.defaultSelected !== action.defaultSelected) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      })
    }
  }
  return state
}