import { useState } from 'react'
import './App.css'
import DynamicDashboard from './components/DynamicDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <DynamicDashboard />
    </>
  )
}

export default App
