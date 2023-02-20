import Saludo from "./funciones/Saludo.js";
import Casado from "./funciones/casado.js";
import User from "./funciones/objetos.js";
import Suma2Funciones from "./funciones/funcionEnFuncion.js";
import { UserProps, UserProps2 } from "./funciones/propiedades";
import { UserCard } from "./funciones/usarCard.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <UserCard
        name="Carlos"
        amount={3000}
        married={true}
        points={[99.2, 22.4]}
        address={{
          street: "Avenida me lo",
          number: 1234,
        }}
      />
    </div>
  );
}

export default App;
