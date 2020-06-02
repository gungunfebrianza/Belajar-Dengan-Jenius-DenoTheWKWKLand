import { IUser } from "../types.ts";
import { PostgresClient, bcrypt } from "../deps.ts";
import pgClient from "../db.ts";

class User {
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

}
