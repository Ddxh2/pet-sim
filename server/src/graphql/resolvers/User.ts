const mockUser = { username: "a", password: "b", email: "asd@123.com" };

const resolvers = {
  Query: {
    users: () => [],
  },
  Mutation: {
    register: () => mockUser,
    login: () => mockUser,
  },
};

export default resolvers;
