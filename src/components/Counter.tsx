import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h3>Count: <small>{count}</small></h3>
      <button onClick={() => setCount(count + 1)}>+1</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
};

