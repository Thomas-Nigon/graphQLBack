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
import { User } from "./user.typeDefs.js";
import { users } from "../../data/users.js";
import { UserInput } from "./user.inputs.js";
let UserResolver = class UserResolver {
    getUsers() {
        return users;
    }
    getUserById(id) {
        return users.find((user) => user.id == id);
    }
    addUser({ name, email }) {
        const lastId = parseInt(users.at(-1)?.id ?? "0", 10);
        const id = (lastId + 1).toString();
        users.push({ name, email, id });
        return users.at(-1);
    }
};
__decorate([
    Query(() => [User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUsers", null);
__decorate([
    Query(() => User),
    __param(0, Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "getUserById", null);
__decorate([
    Mutation(() => User),
    __param(0, Arg("data")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInput]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "addUser", null);
UserResolver = __decorate([
    Resolver(User)
], UserResolver);
export { UserResolver };
