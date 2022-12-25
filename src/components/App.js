import React, { useReducer, useState } from 'react'
import { counterReducer } from '../reducers/counterReducer';
import '../styles/App.css';
const App = () => {
const initialState = {count:0};
const [state,dispatch] = useReducer(counterReducer,initialState)
const [fName,setName] = useState('sumit')

const handleUpdateName = () => {
  setName('Raghu')
}
  return (
    <div id="main">
      <p>Count: {state.count} {fName}</p>
      <button onClick={() => dispatch({type:'increment'})}>INC</button>
      <button onClick={() => dispatch({type:'decrement'})}>DEC</button>
      <button onClick={handleUpdateName}>update Fname</button>
    </div>
  )
}


export default App;
