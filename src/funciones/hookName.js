//1
import { useState } from "react";

export function SetMensaje() {
  const [mesanje, setMen] = useState();

  return (
    <div>
      <input onChange={(e) => setMen(e.target.value)} />
      <button
        onClick={() => {
          alert(mesanje);
        }}
      >
        Save
      </button>
    </div>
  );
}
