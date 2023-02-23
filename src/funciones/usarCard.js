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

export function UserCard2({ name, amount, married, address }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{amount}</p>
      <p>{married ? "casado" : "soltero"}</p>
      <ul>
        <li>City: {address.street}</li>
        <li>addreess: {address.number}</li>
        <li>Amount: {amount}</li>
      </ul>
    </div>
  );
}

//<UserCard
//name="Carlos"
//amount={3000}
//married={true}
//points={[99.2, 22.4]}
//address={{
//  street: "Avenida me lo",
//  number: 1234,
//}}
///>
//<UserCard2
//name="Jose"
//amount={11000}
//married={false}
//address={{
//  street: "CQ",
//  number: 9522222243,
//}}
///>
//<UserCard
//name="Haniia"
//amount={4000}
//married={true}
//address={{
//  street: "Cartago",
//  number: 93,
//}}
///>
