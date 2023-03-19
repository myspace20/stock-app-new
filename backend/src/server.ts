import express, { Application, Response, Request} from 'express'
import { graphqlHTTP } from 'express-graphql'
import cors from 'cors'



const main = async () =>{

    const app:Application = express()

    app.use(cors())

    app.use(express.json())

    app.listen(3000, 'localhost', ()=>{
        console.log("Live")
    })
}


main().catch((error)=>{
    console.log(error)
})