import React, { useEffect, useState } from "react";
import '../styles/App.css';

const App = () => {

  let [count, setCount] = useState(0);

  const doubleClick = () => {
    alert("cant edit it");
  }

  const incrementCounter = () => {
    setCount(count + 1);
  }
  useEffect(() => {

  }, [])

  return (
    <div className="ball">
      <h1 className="count" onDoubleClick={doubleClick}>{count}</h1>
      <button className='increment-button' onClick={incrementCounter}>Increment</button>
    </div>
  )
}


export default App;