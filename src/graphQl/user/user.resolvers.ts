import { Arg, Mutation, Query } from "type-graphql";

import { Resolver } from "type-graphql";
import { User } from "./user.typeDefs.js";
import { users } from "../../data/users.js";
import { UserInput } from "./user.inputs.js";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  getUsers() {
    return users;
  }

  @Query(() => User)
  getUserById(@Arg("id") id: string) {
    return users.find((user) => user.id == id);
  }

  @Mutation(() => User)
  addUser(@Arg("data") { name, email }: UserInput) {
    const lastId = parseInt(users.at(-1)?.id ?? "0", 10);
    const id = (lastId + 1).toString();
    users.push({ name, email, id });
    return users.at(-1);
  }
}
