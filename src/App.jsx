import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
        border: '5px solid #333',
        width: '35%',
        height: '50%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
      }}>
        <h1>React Counter App</h1>
        <h1 style={{
          fontSize: '5rem',
          animation: 'pulse 1s infinite'
        }}>{count}</h1>

       <div>
       <button onClick={increment} style={buttonStyle}>+</button>
        <button onClick={reset} style={buttonStyle}>0</button>
        <button onClick={decrement} style={buttonStyle}>-</button>
       </div>
      </div>
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }
        `}
      </style>
    </>
  )
}

const buttonStyle = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '1.5rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  background: 'rgba(0, 0, 0, 0.2)',
  color: '#333',
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  transition: 'background 0.3s, transform 0.3s',
  outline: 'none'
}

buttonStyle[':hover'] = {
  background: 'rgba(0, 0, 0, 0.4)',
  transform: 'scale(1.05)'
}

export default App
