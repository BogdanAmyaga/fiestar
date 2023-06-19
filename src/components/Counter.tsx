import React, { useState } from 'react';
import './counter.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () =>  { 
        setCount(count + 1)
     }
  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter