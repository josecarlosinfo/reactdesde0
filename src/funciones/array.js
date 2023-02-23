export function Robot() {
  const users = [
    {
      id: 1,
      name: "Fio",
      image: "https://robohash.org/user44",
    },
    {
      id: 2,
      name: "Jose",
      image: "https://robohash.org/user4",
    },
    {
      id: 2,
      name: "coco",
      image: "https://robohash.org/user3",
    },
  ];

  return (
    <div>
      <>
        {users.map((user, index) => {
          return (
            <div key={index}>
              <h1>{user.name}</h1>
              <img src={user.image} alt={user.name} />
            </div>
          );
        })}
      </>
    </div>
  );
}

export default Robot;
