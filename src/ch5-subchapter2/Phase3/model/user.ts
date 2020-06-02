import { IUser } from "../types.ts";
import { PostgresClient, bcrypt } from "../deps.ts";
import { pgClient } from "../db.ts";

class UserClass {
  private pgClient: PostgresClient;
  constructor(pgClient: PostgresClient) {
    this.pgClient = pgClient;
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password);
  }

  private async beforeInsert(data: IUser): Promise<IUser> {
    const hashedPassword = await this.hashPassword(data.password);
    return {
      ...data,
      password: hashedPassword,
    };
  }

  private async get(type: string, value: string | number): Promise<IUser[]> {
    try {
      await this.pgClient.connect();
      const text = `select * from users where ${type} = $1`;
      const result = await this.pgClient.query({
        text,
        args: [value],
      });
      await this.pgClient.end();
      return result.rowsOfObjects() as IUser[];
    } catch (error) {
      throw error;
    }
  }

  async findOneByEmail(email: string): Promise<Omit<IUser, "password"> | null> {
    try {
      const [result] = await this.get("email", email);
      if (!result) return null;
      return {
        id: result.id,
        email: result.email,
        name: result.name,
      };
    } catch (error) {
      throw error;
    }
  }

  async insert(args: IUser): Promise<{ id: string }> {
    try {
      await this.pgClient.connect();
      const data = await this.beforeInsert(args);
      const text =
        "insert into users (id, email, password, name) values ($1, $2, $3, $4) returning id";
      const result = await this.pgClient.query({
        text,
        args: [data.id, data.email, data.password, data.name],
      });
      await this.pgClient.end();
      return { id: result.rows[0][0] };
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: string): Promise<Omit<IUser, "password"> | null> {
    try {
      const [result] = await this.get("id", id);
      if (!result) return null;

      return {
        id: result.id,
        email: result.email,
        name: result.name,
      };
    } catch (error) {
      throw error;
    }
  }

  async insert2(args: IUser): Promise<void> {
    try {
      await this.pgClient.connect();
      const data = await this.beforeInsert(args);
      const text =
        "insert into users (id, email, password, name) values ($1, $2, $3, $4) returning id";
      const result = await this.pgClient.query({
        text,
        args: [data.id, data.email, data.password, data.name],
      });
      await this.pgClient.end();
    } catch (error) {
      throw error;
    }
  }

  async comparePassword(
    email: string,
    password: string
  ): Promise<Omit<IUser, "password"> | null> {
    try {
      const [user] = await this.get("email", email);
      if (!user) return null;

      const result = await bcrypt.compare(password, user.password);
      if (!result) return null;

      return {
        id: user.id,
        email: user.email,
        name: user.name,
      };
    } catch (error) {
      throw error;
    }
  }
}

export const User = new UserClass(pgClient);
