function Saludar() {
  const num = 17;
  const num2 = 18;

  function Sumar(x, y) {
    return x + y;
  }

  return (
    <div>
      <h1>La suma de estos dos son {Sumar(num, num2)}</h1>
    </div>
  );
}
export default Saludar;
