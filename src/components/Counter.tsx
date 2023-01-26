import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = (number: number): void => {
    setCount(count + number);
  };

  return (
    <div className="mt-3">
      <h3>Counter</h3>
      <h5>Value: {count}</h5>
      <button
        onClick={() => handleInc(1)}
        className="btn btn-outline-primary mt-2 me-3"
      >
        +1
      </button>
      <button
        onClick={() => handleInc(2)}
        className="btn btn-outline-primary mt-2 me-3"
      >
        +2
      </button>
      <button
        onClick={() => setCount(0)}
        className="btn btn-outline-danger mt-2"
      >
        Reset
      </button>
    </div>
  );
};

export default Counter;
