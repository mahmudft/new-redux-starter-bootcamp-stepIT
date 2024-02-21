import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import CounterValue from './components/CounterValue'
import Products from './components/Products'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p>Test</p>
      <Products />
    </>
  )
}

export default App
