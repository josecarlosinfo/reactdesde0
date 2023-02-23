export function TaskCard({ ready }) {
  const cardStyle = { background: "#702020", color: "#ffff", padding: "20px" };
  return (
    <div style={cardStyle}>
      <h1>Mi primer tarea</h1>

      <span style={ready ? { background: "green" } : { background: "red" }}>
        {ready ? "tarea realizada" : "tarea no realizada"}
      </span>
    </div>
  );
}
