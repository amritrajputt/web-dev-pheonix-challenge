import { useState } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0)
  const addValue = () => {
    setCount(count => count+1)
    setCount(count => count+1)
    setCount(count => count+1)
    setCount(count => count+1)
    setCount(count => count+1)
  } 
  const subvalue = () => {
    if(count > 0){
    setCount(count => count-1 )
  }
}
  return (
    <>
      <h1>Done with Day 2 😁</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>add</button>{" "}
      <button onClick={subvalue}>Sub</button>
      <p>footer: {count}</p>
    </>
  )
}

export default App
