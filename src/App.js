import React from 'react'
import Navbar from './component.js/Navbar'
import Button from './component.js/Button'

export default function App() {
 

  return (
    <div>
      <Navbar/>
      <div className="container my-3" > 
      <h2>Calculator</h2>
      <Button />
      </div>
    </div>
  )
}

