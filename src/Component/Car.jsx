import React from 'react'

const Car = ({color, model,brand}) => {
  return (
    <div>
      <h2>My car is {color} {model}!</h2>
      <p>MyCar Brand {brand}</p>
    </div>
  )
}

export default Car
