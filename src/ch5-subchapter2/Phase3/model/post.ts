import { IPost, IUser } from "../types.ts";
import { PostgresClient } from "../deps.ts";
import { pgClient } from "../db.ts";

class PostClass {
  private pgClient: PostgresClient;
  constructor(pgClient: PostgresClient) {
    this.pgClient = pgClient;
  }

  async findAll(): Promise<Partial<IPost>[]> {
    try {
      await this.pgClient.connect();
      const text = `
        select posts.id as id, title, body, user_id, users.name as user_name
        from posts 
        inner join users on users.id = posts.user_id;`;
      const result = await this.pgClient.query({
        text,
      });
      await this.pgClient.end();
      return result.rowsOfObjects().map(({ user_id, user_name, ...rest }) => ({
        ...rest,
        user: {
          id: user_id as string,
          name: user_name as string,
        },
      }));
    } catch (error) {
      throw error;
    }
  }

  async findOneById(id: string): Promise<Partial<IPost>> {
    try {
      await this.pgClient.connect();
      const text = `
        select posts.id as id, title, body, user_id, users.name as user_name
        from posts 
        inner join users on users.id = posts.user_id
        where posts.id = $1;`;
      const result = await this.pgClient.query({
        text,
        args: [id],
      });
      await this.pgClient.end();
      return result.rowsOfObjects().map(({ user_id, user_name, ...rest }) => ({
        ...rest,
        user: {
          id: user_id as string,
          name: user_name as string,
        },
      }))[0];
    } catch (error) {
      throw error;
    }
  }

  async insert(
    data: Omit<IPost, "user"> & { userId: string }
  ): Promise<Omit<IPost, "user"> | null> {
    try {
      await this.pgClient.connect();
      const text =
        "insert into posts (id, title, body, user_id) values ($1, $2, $3, $4) returning id, title, body";
      const result = await this.pgClient.query({
        text,
        args: [data.id, data.title, data.body, data.userId],
      });
      await this.pgClient.end();

      return result.rowsOfObjects()[0] as Omit<IPost, "user">;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      await this.pgClient.connect();
      const text = "delete from posts where posts.id = $1";
      await this.pgClient.query({
        text,
        args: [id],
      });
      await this.pgClient.end();
      return true;
    } catch (error) {
      throw error;
    }
  }

  //end class
}

export const Post = new PostClass(pgClient);
