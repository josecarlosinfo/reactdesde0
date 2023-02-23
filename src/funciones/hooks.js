//1
import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(10);

  return (
    <div>
      <h1>Conunter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        sumar
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        restar
      </button>
    </div>
  );
}
