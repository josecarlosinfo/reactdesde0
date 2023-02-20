function Nombre() {
  const user = {
    firstName: "Carlos",
    lastName: "Perez",
    apodo: "Tokio",
  };
  return (
    <div>
      <h1>return {JSON.stringify(user)}</h1>
      <h2>{user.firstName}</h2>
      <h3>{user.lastName}</h3>
      <h4>{user.apodo}</h4>
    </div>
  );
}

export default Nombre;
