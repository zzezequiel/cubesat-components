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
        <div className="row btn-group-sm">
            <button className='col btn btn-outline-primary' onClick={add}>+</button>
            <button className='col btn btn-outline-primary' onClick={subtrac}>-</button>
        </div>
    </section>
  )
}