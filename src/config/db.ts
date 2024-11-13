import { DataSource } from "typeorm";
import { Book } from "../graphQl/book/book.typeDefs.js";
import { User } from "../graphQl/user/user.typeDefs.js";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "./graphql101.sqlite",
  entities: [Book, User],
  synchronize: true,
  /*   migrations: ["./src/migrations/*.ts"],
  migrationsTableName: "migrations", */
  logging: false,
});
