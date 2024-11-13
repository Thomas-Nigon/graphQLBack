import { Field } from "type-graphql";

import { InputType } from "type-graphql";

@InputType()
export class BookInput {
  @Field()
  title!: string;

  @Field()
  author!: string;
}
