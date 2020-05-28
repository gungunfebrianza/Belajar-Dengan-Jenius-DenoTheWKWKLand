export interface User {
  id: string;
  username: string;
  password: string;
}

const users: Array<User> = [
  {
    id: "1",
    username: "brad",
    password: "brad",
  },
  {
    id: "2",
    username: "max",
    password: "max",
  },
];

export default users;
