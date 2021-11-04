"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeDef = "\ntype User{\n    username: String\n    createdAt: String\n}\n\ninput UserRegisterInput{\n    username: String\n    password: String\n    email: String\n}\n\ntype Query{\n    users: [User]\n}\n\ntype Mutation {\n    register(registerInput: UserRegisterInput): User!\n    login(username: String!, password:String!): User!\n}\n";
exports.default = typeDef;
