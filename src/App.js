import React from 'react'
import Button from './component.js/Button'
import Display from './component.js/Display'
import Navbar from './component.js/Navbar'

export default function App() {
  return (
    <div>
      <Navbar/>
      <div className="container my-3" > 
      <h2>Calculator</h2>
      <Display/>
      <Button/>
      </div>
    </div>
  )
}

