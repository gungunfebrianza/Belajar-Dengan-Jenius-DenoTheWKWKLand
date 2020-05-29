export interface User {
  id: string;
  username: string;
  password: string;
}

const users: Array<User> = [
  {
    id: "1",
    username: "maudy",
    password: "faza",
  },
  {
    id: "2",
    username: "ayunda",
    password: "faza",
  },
];

export default users;
