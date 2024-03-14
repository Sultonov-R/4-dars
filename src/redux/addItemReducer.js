const defaultState = {
  addItemReducer:0
}

export function addItemReducer(state =defaultState, actions) {
  switch (state.type) {
    case "ADD":
      return {
        ...state,
        addItemReducer: state.addItemReducer + actions.payload,
      };

    default:
      return state;
  }
}
