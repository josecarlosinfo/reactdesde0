export function UserProps(props) {
  console.log(props);
  return <h1>Los cursos que existen es {props.title}</h1>;
}

export function UserProps2({ title, name = " fio" }) {
  console.log(title);
  return (
    <h1>
      Los cursos que existen es {title} con el nombre {name}
    </h1>
  );
}
