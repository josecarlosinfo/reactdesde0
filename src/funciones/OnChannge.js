export function Oncahnge() {
  return <input id="hola" onChange={(e) => console.log(e.target.value)} />;
}

export function FormEnviar() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("enviado");
        }}
      >
        <button type="">Send</button>
      </form>
      ;
    </div>
  );
}
