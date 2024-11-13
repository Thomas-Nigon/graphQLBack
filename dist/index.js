import "reflect-metadata";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./graphQl/book/book.resolvers.js";
import { UserResolver } from "./graphQl/user/user.resolvers.js";
/* import { DataSource } from "typeorm";
import { Book } from "./graphQl/book/book.typeDefs.js";
import { User } from "./graphQl/user/user.typeDefs.js"; */
import { dataSource } from "./config/db.js";
const main = async () => {
    const schema = await buildSchema({
        resolvers: [BookResolver, UserResolver],
    });
    const server = new ApolloServer({ schema });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 },
    });
    await dataSource.initialize();
    console.log(`🚀  Server ready at: ${url}`);
};
main();
