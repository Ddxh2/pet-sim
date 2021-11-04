"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
var dotenv_1 = __importDefault(require("dotenv"));
var mongoose_1 = __importDefault(require("mongoose"));
var schema_1 = require("./graphql/schema");
dotenv_1.default.config();
var PORT = process.env.PORT || "4000";
var MONGODB = process.env.MONGODB || "";
var server = new apollo_server_1.ApolloServer({
    typeDefs: schema_1.typeDefs,
    resolvers: schema_1.resolvers,
});
mongoose_1.default
    .connect(MONGODB)
    .then(function () {
    console.log("Mongo DB Connected");
    return server.listen({ port: PORT });
})
    .then(function (res) {
    console.log("Server running at " + res.url);
})
    .catch(function (error) { return console.log(error); });
