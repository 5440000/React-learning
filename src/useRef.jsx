import React, { useState, useEffect, useRef } from "react";

export const UseRef =  () => {
  const [value, setValue] = useState("initial");
  const renderCount = useRef(1);
  const inputRef = useRef(null)
  const prevValue = useRef("")
  const focus = ()=>{
      inputRef.current.focus()
  }

useEffect(()=>{prevValue.current = value}, [value])

  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value);
  });


  return (
    <div>
      <div style={{ borderBottom: "1px solid black" }}></div>
      <h2>Learning useRef</h2>
      <h1>Количество рендеров{renderCount.current }</h1>
      <h2>Прошлое состояние:   {prevValue.current}</h2>
      <input
      ref={inputRef }
        type="text"
        onChange={e => setValue(e.target.value)}
        value={value}
      />
      <button onClick={focus}>Фокус на инпуте</button>
    </div>
  );
};
