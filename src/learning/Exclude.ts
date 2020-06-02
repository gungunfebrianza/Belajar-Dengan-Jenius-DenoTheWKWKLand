interface User {
  id: string;
  name: string;
  email: string;
}

//type UserWithoutEmail = Omit<User, "email">;

type UserKeys = keyof User;
type UserKeysWithoutEmail = Exclude<UserKeys, "email">;
