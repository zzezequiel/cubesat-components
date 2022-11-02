import React, { useState } from 'react'

export const Counter = () => {

const [count, setCount] = useState(0);

const add = () => {
    setCount(prev=> prev + 1)
}
const subtrac = () => {
    setCount(prev=> prev - 1)
}

  return (
    <section>
        <h4 className='text-center'>Quantity needed: {count}</h4>
        <div className="cont-quantity text-center">
            <button className='col quantity mx-2' onClick={subtrac}>-</button>
            <button className='col quantity mx-2' onClick={add}>+</button>
        </div>
    </section>
  )
}