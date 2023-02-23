import PropTypes from "prop-types";

export function Button({ text, name }) {
  console.log(text);

  if (!text) {
    console.error("el texto es requerido");
  }

  return (
    <button variant="primary">
      Mi boton {text}- {name}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
Button.defaultProps = {
  name: "desde abajo",
};
