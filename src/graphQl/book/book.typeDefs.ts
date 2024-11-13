import { ObjectType } from "type-graphql";
import { ID } from "type-graphql";
import { Field } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity()
@ObjectType()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: string;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  author!: string;
}
