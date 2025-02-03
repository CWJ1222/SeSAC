import React, { useState, useCallback } from "react";

const Child = React.memo(({ onButtonClick }) => {
  console.log("Child rendered");
  return <button onClick={onButtonClick}>Click Me</button>;
});

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Parent
      </button>
      <Child onButtonClick={handleClick} />
    </div>
  );
};

export default Parent;
