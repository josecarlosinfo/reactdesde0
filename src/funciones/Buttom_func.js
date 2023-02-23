import propTypes from "prop-types";

export function Buton({ text }) {
  return (
    <button
      onClick={(text) => {
        alert("Button Clicked");
      }}
    >
      saludar
    </button>
  );
}
