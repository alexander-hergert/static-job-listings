import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
}

export default Counter;
