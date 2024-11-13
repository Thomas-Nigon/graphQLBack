import { ObjectType } from "type-graphql";
import { ID } from "type-graphql";
import { Field } from "type-graphql";
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  email!: string;
}
