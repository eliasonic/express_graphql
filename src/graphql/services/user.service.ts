import prisma from "../../db"

interface UserInput {
    email: string
    username?: string
}

export const getUsersService = async () => {
    const users = await prisma.user.findMany()
    return users
}

export const getUserService = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: { id }
    })
    return user
}

export const createUserService = async (data: UserInput) => {
    const user = await prisma.user.create({
        data
    })
    return user
}

// For getting user/author of a post
export const getAuthorByPostService = async (authorId: string) => {
    const author = await prisma.user.findUnique({
        where: { id: authorId }
    })
    return author
}