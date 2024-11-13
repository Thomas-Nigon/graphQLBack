import { Arg, Mutation, Query } from "type-graphql";

import { Resolver } from "type-graphql";
import { Book } from "./book.typeDefs";
import { books } from "../../data/books";
import { BookInput } from "./book.inputs";

@Resolver(Book)
export class BookResolver {
  @Query(() => [Book])
  books() {
    return books;
  }

  @Query(() => Book)
  getBookById(@Arg("id") id: string) {
    return books.find((book) => book.id == id);
  }

  @Mutation(() => Book)
  addBook(@Arg("data") { title, author }: BookInput) {
    const lastId = parseInt(books.at(-1)?.id ?? "0", 10);
    const id = (lastId + 1).toString();
    books.push({ title, author, id });
    return books.at(-1);
  }
}
