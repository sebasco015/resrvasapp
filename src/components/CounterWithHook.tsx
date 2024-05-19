import { useCounter } from "../hooks/useCounter";


export const CounterWithHook = () => {

  const {count, increment} = useCounter({
    initialValue: 0
  });

  return (
    <div>
      <h3>Count: <small>{count}</small></h3>
      <button onClick={ () => increment(+1)}>+1</button>
      &nbsp;

      <button onClick={() => increment(-1)}>-1</button>
    </div>
  );
};


