import React, { useState } from "react";

function App() {
  const [total, setTotal] = useState(0);
  function increment() {
    setTotal(total + 1);
  }

  function decrement() {
    setTotal(total - 1);
  }

  return (
    <div>
      <h1>Total:{total}</h1>
      <div>
        <button onClick={increment}>+1 count</button>
        <button onClick={decrement}>-1 count</button>
      </div>
    </div>
  );
}

export default App;
