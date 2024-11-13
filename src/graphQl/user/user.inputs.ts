import { Field } from "type-graphql";
import { InputType } from "type-graphql";
import { BaseEntity } from "typeorm";

@InputType()
export class UserInput extends BaseEntity {
  @Field()
  name!: string;

  @Field()
  email!: string;
}
