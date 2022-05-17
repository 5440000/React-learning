import React, { useState, useEffect } from "react";

function UseEffect() {
  const [type, setType] = useState("users");
  const [data, setData] = useState([]);
  const [pos,setPos] = useState({x:0, y:0})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [type]);


  function mouseMoveHandler (event){
    setPos({
      x: event.clientX,
      y: event.clientY
  })
  
}




  useEffect(()=>{
    console.log("component dead ");
    
    window.addEventListener("mousemove", mouseMoveHandler)
  
})
  return (
    <div>
      <div style={{ borderBottom: "1px solid black" }}></div>
      <h2>Learning useEffect</h2>
      <h1>Рeсурс:{type}</h1>
      <button onClick={() => setType("users")}>Пользователи</button>
      <button onClick={() => setType("todos")}>Todo</button>
      <button onClick={() => setType("posts")}>Посты</button>

      {/* <pre>{JSON.stringify(data, null , 2)}</pre> */}
      <pre>{JSON.stringify(pos, null , 2)}</pre>

    </div>
  );
}

export default UseEffect;
