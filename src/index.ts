import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { typeDefs, resolvers } from './graphql/index'

const app = express()
const port = process.env.PORT || 3000

const bootstrapServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    })

    await server.start()

    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use('/graphql', expressMiddleware(server))

    app.listen(port, () => {
        console.log(`Server started at port ${port}`)
        console.log(`Graphql endpoint: http://localhost:${port}/graphql`)
    })
}

bootstrapServer()