import { readFileSync } from "fs";
import { join } from "path";

const userTypes = readFileSync(join(__dirname, "./typeDefs/user.graphql"), "utf-8");

const postTypes = readFileSync(join(__dirname, "./typeDefs/post.graphql"), "utf-8");

export const typeDefs = `
    ${userTypes}
    ${postTypes}
`;

export const resolvers = {
    Query: {
        // ...userResolvers.Query,
    },
    Mutation: {
        // ...userResolvers.Mutation,
        // ...postResolvers.Mutation
    }
}