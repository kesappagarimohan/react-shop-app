import React, { useState } from "react";
const Counter: React.FC<{}> = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p data-testid="countervalue">{count} </p>
      <button
        data-testid="increment-btn"
        onClick={() => setCount((prev) => prev + 1)}
      >
        Increment
      </button>
      <button
        data-testid="decrement-btn"
        onClick={() => setCount((prev) => prev - 1)}
      >
        Decrement
      </button>
    </div>
  );
};
export default Counter;
