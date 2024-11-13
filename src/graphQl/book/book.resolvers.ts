import { Arg, Mutation, Query } from "type-graphql";

import { Resolver } from "type-graphql";
import { BookInput } from "./book.inputs.js";
import { Book } from "./book.typeDefs.js";
//import { books } from "../../data/books.js";
import { dataSource } from "../../config/db.js";

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  async getBooks() {
    const books = await Book.find();
    return books;
  }

  @Query(() => Book)
  async getBookById(@Arg("id") id: string) {
    const book = await Book.findOneBy({ id });
    return book;
  }

  @Mutation(() => Book)
  async addBook(@Arg("data") { title, author }: BookInput) {
    const book = await Book.create({ title, author });
    await book.save();
    return book;
  }
}
