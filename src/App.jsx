import { useState } from 'react'
import './App.css'
import Car from './Component/Car'

function App() {
 

  return (
    <>
    <div>
      <Car brand="Ford" model="Mustang" color="red" year={1969} />
    </div>
    </>
  )
}

export default App
