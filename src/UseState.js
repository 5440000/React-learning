import React, { useState } from "react";

function UseState() {
  const [total, setTotal] = useState(0);
  function increment() {
    setTotal((counter) => {
      return counter + 1;
    });
  }

  function decrement() {
    setTotal(total - 1);
  }

  const [state,setState] = useState({
    title: "Заголовок",
    id: Date.now()
  })

  function updateTitle () {
      setState(prev =>{
        return {
        ...prev,
        title: "New Заголовок"
        }
      })
  }
  return (
    <div>
      <h2>Learning useState</h2>
      <h1>Total:{total}</h1>
      <button onClick={increment}>+1 count</button>
      <button onClick={decrement}>-1 count</button>
      <button onClick={updateTitle}>New</button>
      <pre>
        {JSON.stringify(state,null,2)}
      </pre>

    </div>
  );
}

export default UseState;
