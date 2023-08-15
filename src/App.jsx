import { useState } from 'react'
import './styles/App.css'
import Personal from './components/Personal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="left-side">
        <Personal/>

      </div>
      <div id="right-side">
        
      </div>
    </>
  )
}

export default App
