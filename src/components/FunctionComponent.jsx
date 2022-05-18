import React, { useEffect, memo } from "react";

export const FunctionComponent = memo(({ title }) => {
  useEffect(() => {
    console.log("🚀 ~ func: useEffect");

    return () => {
        console.log("🚀 ~ func: unmount");
    }
  });

  return (
    <>
      {console.log("🚀 ~ func: render")}
      <div>{title}</div>
    </>
  );
});
