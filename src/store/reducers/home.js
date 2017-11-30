const initState = {number: 10000};
let home = (state = initState, action = {}) => {
	console.log(state)
  switch (action.type) {
    case 'ADDD':
      return {...state, number: state.number + 1};
    case 'SUB':
      return {...state, number: state.number - 1};
    default:
      return state;
  }
}

export {home};