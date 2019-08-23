export default function createStore(reducer) {
  // add your code here
  let state = undefined
  function getState() {
  	return state
  }
  function dispatch(action) {
  	state = reducer(state, action)
  	render()
  }

  dispatch({type: "@@INIT"})

  return {getState: getState, dispatch: dispatch}
}

function render() {
  const container = document.getElementById('container');
}
