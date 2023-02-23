import React, { useState, useEffect } from "react";

// use efect es para saber los cambios que se hacen el la pagina

export function SetMensaje() {
  const [mesanje, setMen] = useState();
  const [counter, setCounter] = useState(0);

  //sirve como para vigilar una variable
  useEffect(() => {
    console.log("desde useEfecct");
  }, [counter]);
  return (
    <div>
      <input onChange={(e) => setMen(e.target.value)} />
      <button
        onClick={() => {
          alert("jojo");
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Contar
      </button>
    </div>
  );
}
