type User = {
  id: string;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User, "email">;
let xx: UserWithoutEmail = {
  name: "asdasd",
  id: "asdsd",
};
