import { readFileSync } from "fs";
import { join } from "path";
import { userResolvers } from "./resolvers/user.resolver";
import { postResolvers } from "./resolvers/post.resolver";

const userTypes = readFileSync(join(__dirname, "./typeDefs/user.graphql"), "utf-8");
const postTypes = readFileSync(join(__dirname, "./typeDefs/post.graphql"), "utf-8");

export const typeDefs = `
    ${userTypes}
    ${postTypes}
`;

export const resolvers = {
    Query: {
        ...userResolvers.Query,
    },
    Mutation: {
        ...userResolvers.Mutation,
        ...postResolvers.Mutation
    },
    User: {
        ...userResolvers.User
    },
    Post: {
        ...postResolvers.Post
    }
}