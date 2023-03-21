import express, { Application, Response, Request} from 'express'
import { graphqlHTTP,} from 'express-graphql'
import cors from 'cors'
import schema from './schema/schema'
import env from 'dotenv'


env.config()

const port = process.env.PORT as string



const main = async () =>{

    const app:Application = express()

    app.use(cors())

    app.use(express.json())

    app.listen(port, ()=>{
        console.log("Live")
    })

    app.use('/graphiql', graphqlHTTP((req, res) =>{


        return{
            schema,
            graphiql: true,
            context: { request: req.headers.authorization}
        }
    
    }))

}


main().catch((error)=>{
    console.log(error)
})