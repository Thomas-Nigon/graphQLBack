import { ObjectType } from "type-graphql";
import { ID } from "type-graphql";
import { Field } from "type-graphql";

@ObjectType()
export class Book {
  @Field(() => ID)
  id!: string;
  @Field()
  title!: string;
  @Field()
  author!: string;
}
