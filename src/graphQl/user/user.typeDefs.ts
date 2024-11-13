import { ObjectType } from "type-graphql";
import { ID } from "type-graphql";
import { Field } from "type-graphql";

@ObjectType()
export class User {
  @Field(() => ID)
  id!: string;
  @Field()
  name!: string;
  @Field()
  email!: string;
}
