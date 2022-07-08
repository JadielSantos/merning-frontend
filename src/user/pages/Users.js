import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [{ id: "u1", name: "Max Santos", imageUrl: "https://i.picsum.photos/id/768/400/400.jpg?hmac=y9KDTj7aHltmjur-2s8yTahYuev8zwuXXinIWEnYtaY", placeCount: 6 },
  { id: "u2", name: "Eva Fragoso", imageUrl: "https://i.picsum.photos/id/901/400/400.jpg?hmac=_zUxp1s64I1TdD9xqrg1JN-6Qc3pfoBBd9F_i6tU2Lk", placeCount: 2 },
  { id: "u3", name: "Jadiel Freitas", imageUrl: "https://i.picsum.photos/id/817/400/400.jpg?hmac=Zvc0L7Obt_KZDd6-gqe7sypBbbMSSoL-QHT4q6Bxx_w", placeCount: 3 }];

  return <UsersList items={USERS} />;
};

export default Users;