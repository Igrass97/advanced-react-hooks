// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// SetState simulation
function setStateReducer(state, update) {
  if (typeof update === 'function') return update(state)

  return {...state, ...update}
}

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {count: state.count + action.step}
    case 'DECREMENT':
      return {count: state.count - action.step}
    default:
      return state
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(reducer, {count: initialCount})
  const {count} = state
  // const increment = () => setState({count: count + step})

  // const increment = () =>
  //   setState(currentState => ({
  //     count: currentState.count + step,
  //   }))

  const increment = () => {
    dispatch({type: 'INCREMENT', step})
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT', step})
  }

  return (
    <>
      <button onClick={increment}>{count}</button>
      <button onClick={decrement}>Decrement</button>
    </>
  )
}

function App() {
  return <Counter />
}

export default App
