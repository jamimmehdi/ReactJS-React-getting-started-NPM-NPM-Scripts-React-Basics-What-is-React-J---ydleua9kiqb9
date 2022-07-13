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

  return (
    <div class="ball">
      <h1 class="count" ondoubleclick={doubleClick}>{count}</h1>
      <button class='increment-button' onclick={incrementCounter}>Increment</button>
    </div>
  )
}


export default App;