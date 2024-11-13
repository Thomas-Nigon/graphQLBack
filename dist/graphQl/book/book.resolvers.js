var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Arg, Mutation, Query } from "type-graphql";
import { Resolver } from "type-graphql";
import { BookInput } from "./book.inputs.js";
import { Book } from "./book.typeDefs.js";
import { books } from "../../data/books.js";
let BookResolver = class BookResolver {
    getBooks() {
        return books;
    }
    getBookById(id) {
        return books.find((book) => book.id == id);
    }
    addBook({ title, author }) {
        const lastId = parseInt(books.at(-1)?.id ?? "0", 10);
        const id = (lastId + 1).toString();
        books.push({ title, author, id });
        return books.at(-1);
    }
};
__decorate([
    Query(() => [Book]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBooks", null);
__decorate([
    Query(() => Book),
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "getBookById", null);
__decorate([
    Mutation(() => Book),
    __param(0, Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [BookInput]),
    __metadata("design:returntype", void 0)
], BookResolver.prototype, "addBook", null);
BookResolver = __decorate([
    Resolver(Book)
], BookResolver);
export { BookResolver };
