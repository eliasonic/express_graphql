import { getUsersService, getUserService, createUserService } from "../services/user.service"
import { getPostsByAuthorService } from "../services/post.service"

export const userResolvers = {
    Query: {
        async users() {
            return await getUsersService()
        },
        
        async user(_: any, args: Record<string, any>) {
            return await getUserService(args.id)
        },
    },

    Mutation: {
        async createUser(_: any, args: Record<string, any>) {
            return await createUserService(args.data)
        }
    },
    
    User: {
        async posts(parent: Record<string, any>) {
            return await getPostsByAuthorService(parent.id)
        }
    }
}