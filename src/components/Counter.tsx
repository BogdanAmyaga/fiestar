import React, { useState } from 'react';
import classname from './counter.module.scss';

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () =>  { 
        setCount(count + 1)
     }
  return (
    <div className={classname.header}>
        <h2>{count}</h2>
        <button onClick={increment}>plus</button>
    </div>
  )
}

export default Counter