interface User {
  id: string;
  name: string;
  email: string;
}

//type UserWithoutEmail = Omit<User, "email">;

type UserKeys = keyof User;
type UserKeysWithoutEmail = Exclude<UserKeys, "email">;

// type UserWithoutEmail = Pick<User, UserKeysWithoutEmail>;
// let x: UserWithoutEmail = {
//   name: "asdasd",
//   id: "asdsd",
// };

//type UserWithoutEmail = Pick<User, Exclude<keyof User, "email">>;
type UserWithoutEmail = Omit<User, "email">;
let xx: UserWithoutEmail = {
  name: "asdasd",
  id: "asdsd",
};
