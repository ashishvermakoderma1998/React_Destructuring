import React from 'react'

const Car = ({color, model,brand}) => {
  return (
    <div>
      <h2>My car is {model}!</h2>
      <p>MyCar Brand {brand}</p>
      <h1>MyCar Co  {Color}</h1>
    </div>
  )
}

export default Car
