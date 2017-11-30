const initState = {number: 0};
let counter = (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADD':
      return {...state, number: state.number + 1};
    case 'SUB':
      return {...state, number: state.number - 1};
    default:
      return state;
  }
}

export {counter};