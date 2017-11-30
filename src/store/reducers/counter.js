const initState = {number: 0};
let counter = (state = initState, action = {}) => {
	console.log(state) // 这里的state是store所有的数据映射，所以不要在原来的state上修改，但可以解构赋值    重点强调
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