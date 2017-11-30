const initState = {number: 10000};
let home = (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADD':
      return {home: state.number + 1};
    case 'SUB':
      return {home: state.number - 1};
    default:
      return state;
  }
}

export {home};