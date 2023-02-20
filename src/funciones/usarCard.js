export function UserCard(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.amount}</p>
      <p>{props.married ? "casado" : "soltero"}</p>
      <ul>
        <li>City: {props.address.street}</li>
        <li>addreess: {props.address.number}</li>
      </ul>
    </div>
  );
}
///1:20
