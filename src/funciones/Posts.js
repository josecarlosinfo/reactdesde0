export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((res) => res.json())
          .then((res) => console.log(res))
          .catch((error) => console.error(error));
      }}
    >
      Traer Datos
    </button>
  );
};
