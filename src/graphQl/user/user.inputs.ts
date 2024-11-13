import { Field } from "type-graphql";
import { InputType } from "type-graphql";

@InputType()
export class UserInput {
  @Field()
  name!: string;

  @Field()
  email!: string;
}
