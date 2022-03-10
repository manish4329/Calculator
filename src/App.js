import React from 'react'
import Navbar from './component/Navbar'
import Button from './component/Button'
export default function App() {
  const btns=[['C','%','back','divide'],['7','8','9','X'],['4','5','6','-'],['1','2','3','+'],['00','0','.','=']]
  return (
    <div>
      <Navbar/>
      <div className="container my-3" > 
      <h2>Calculator</h2>
      <Button btns={btns}/>
      </div>
    </div>
  )
}

