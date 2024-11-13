import { Arg, Mutation, Query } from "type-graphql";

import { Resolver } from "type-graphql";
import { User } from "./user.typeDefs.js";
//import { users } from "../../data/users.js";
import { UserInput } from "./user.inputs.js";

@Resolver(User)
export class UserResolver {
  @Query(() => [User])
  async getUsers() {
    return await User.find();
  }

  @Query(() => User)
  async getUserById(@Arg("id") id: string) {
    return await User.findOneBy({ id });
  }

  @Mutation(() => User)
  async addUser(@Arg("data") { name, email }: UserInput) {
    const user = await User.create({ name, email });
    await user.save();
    return user;
  }
}
