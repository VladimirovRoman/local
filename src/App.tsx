import { useState } from 'react'
import './App.css'

function App() {
    const [value, setValue] = useState(0);
  
    const increment = () => {
      setValue(value + 1);
      setValue(value + 1);
    }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={increment}>Увеличить значение</button>
    </>
  )
}

export default App
