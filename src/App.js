import React, { useState } from "react";
import { ClassComponent } from "./components/ClassComponent";
import { FunctionComponent } from "./components/FunctionComponent";

export const App = () => {
  const [classString, setClassString] = useState("");
  const [funcString, setFuncString] = useState("");
  const [showHellowComponent, toggleComponents] = useState(false);

  return (
    <>
      {showHellowComponent ? (
        <div>Hello World!</div>
      ) : (
        <>
          <ClassComponent title={classString} />
          <FunctionComponent title={funcString} />
          <button onClick={() => setClassString("class")}>Click class</button>
          <button onClick={() => setFuncString("func")}>Func class</button>
        </>
      )}

      <button onClick={() => toggleComponents(!showHellowComponent)}>
        Change Components
      </button>
    </>
  );
}
