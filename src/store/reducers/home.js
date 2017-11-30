const initState = {number: 10000};
let home = (state = initState, action = {}) => {
  switch (action.type) {
    case 'ADDD':
    	console.log(state)
      return {...state, home: state.number += 1};
    case 'SUB':
      return {...state, home: state.number - 1};
    default:
      return state;
  }
}

export {home};