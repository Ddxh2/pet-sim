const typeDef = `
type User{
    username: String
    createdAt: String
}

input UserRegisterInput{
    username: String
    password: String
    email: String
}

type Query{
    users: [User]
}

type Mutation {
    register(registerInput: UserRegisterInput): User!
    login(username: String!, password:String!): User!
}
`;

export default typeDef;
