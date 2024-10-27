import prisma from "../../db";

interface PostInput {
    title: string;
    content: string;
    authorId: string;
}

interface PostEdit {
    title?: string;
    content?: string;
}

export const createPostService = async (data: PostInput) => {
    const post = await prisma.post.create({
        data
    })
    return post
}

export const updatePostService = async (id: string, data: PostEdit) => {
    const post = await prisma.post.update({
        where: { id },
        data
    })
    return post
}

export const deletePostService = async (id: string) => {
    const post = await prisma.post.delete({
        where: { id }
    })
    return post
}

// For getting all posts by a user/author
export const getPostsByAuthorService = async (authorId: string) => {
    const posts = await prisma.post.findMany({
        where: { authorId }
    })
    return posts
}