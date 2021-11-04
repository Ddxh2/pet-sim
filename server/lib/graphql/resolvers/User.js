"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mockUser = { username: "a", password: "b", email: "asd@123.com" };
var resolvers = {
    Query: {
        users: function () { return []; },
    },
    Mutation: {
        register: function () { return mockUser; },
        login: function () { return mockUser; },
    },
};
exports.default = resolvers;
