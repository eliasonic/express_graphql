import { createPostService, updatePostService, deletePostService } from "../services/post.service";
import { getAuthorByPostService } from "../services/user.service";

export const postResolvers = {
    Mutation: {
        async createPost(_: any, { data }: Record<string, any>) {
            return await createPostService(data)
        },

        async updatePost(_: any, { id, data }: Record<string, any>) {
            return await updatePostService(id, data)
        },

        async deletePost(_: any, { id }: Record<string, any>) {
            return await deletePostService(id)
        }
    },

    Post: {
        async author(parent: Record<string, any>) {
            return await getAuthorByPostService(parent.authorId)
        }
    }
}