type User = {
  id: string;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User, "id">;
