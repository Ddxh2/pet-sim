import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { typeDefs, resolvers } from "./graphql/schema";

dotenv.config();

// Take custom port from ENV
const PORT: string = process.env.PORT || "4000";
const MONGODB: string = process.env.MONGODB || "";
// Instance of ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// server.listen(PORT).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("Mongo DB Connected");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  })
  .catch((error) => console.log(error));
