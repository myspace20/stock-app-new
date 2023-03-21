import { GraphQLObjectType, GraphQLID, GraphQLList, GraphQLString, GraphQLNonNull, GraphQLSchema, GraphQLBoolean, GraphQLArgumentConfig, GraphQLArgs, GraphQLTypeResolver, GraphQLScalarType, GraphQLInputType, GraphQLInputObjectType } from 'graphql'
import GraphQLUpload from "graphql-upload/GraphQLUpload.mjs"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/user'
import Stock from '../models/stock'
import path from "path";
import  fs from "fs";
import { FileUploadResponseType, UploadType, fileRenamer } from '../utils/utils'




const secret = process.env.JWT_SECRET as string

interface IFormParams {
    file: any,
}



const stockType: GraphQLObjectType = new GraphQLObjectType({
    name: 'Stocks',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        brand: { type: GraphQLString },
        yearOfManu: { type: GraphQLString },
        user: {
            type: userType,
            resolve(parent, args) {
                return User.findById(parent.UserId)
            }
        }
    })
})

const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        position: { type: GraphQLString },
        email: { type: GraphQLString },
        password: { type: GraphQLString },
        token: { type: GraphQLString },
        image: { type: GraphQLString },
        stocks: {
            type: new GraphQLList(stockType),
            resolve(parent, args) {
                return Stock.findById({ UserId: parent.id })
            }
        }
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        stock: {
            type: stockType,
            resolve(parent, args) {
                return Stock.findById(args.id)
            }
        },
        user: {
            type: userType,
            resolve(parent, args) {
                return User.findById(args.id)
            }
        },
        stocks: {
            type: new GraphQLList(stockType),
            resolve(parent, args) {
                return Stock.find({})
            }
        },
        users: {
            type: new GraphQLList(userType),
            resolve(parent, args) {
                return User.find({})
            }
        }
    }

})

const Mutation: any = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        register: {
            type: userType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                position: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) },
                image: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args, context) {

                console.log(context)

                const exists = await User.findOne({ email: args.email })


                if (exists) {
                    throw new Error("User already exists")
                }

                const password = args.password

                const hashedPassword = await bcrypt.hash(password, 10)

                const newUser = new User({
                    email: args.email,
                    lastName: args.lastName,
                    firstName: args.firstName,
                    position: args.position,
                    password: hashedPassword,
                    image: args.image
                })

                const token = jwt.sign({
                    id: newUser._id,
                    email: args.email
                }, secret, {
                    expiresIn: "1h"
                })

                newUser.token = token

                return newUser.save()
            }
        },
        login: {
            type: userType,
            args: {
                email: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            async resolve(parent, args, context) {

                console.log(context.request)
                const user = await User.findOne({ email: args.email })

                let password = user?.password as string

                console.log(user)


                const match = await bcrypt.compare(args.password, password)

                if (match) {
                    const token = await jwt.sign({
                        id: user?._id,
                        email: args.email
                    }, secret, {
                        expiresIn: "1h"
                    })

                    let userToken = user?.token as string

                    userToken = token

                    return {
                        email: user?.email,
                        token: user?.token,
                    }
                }

            }
        },
        addStock: {
            type: stockType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                brand: { type: new GraphQLNonNull(GraphQLString) },
                yearOfManu: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let stock = new Stock({
                    name: args.name,
                    brand: args.brand,
                    yearOfManu: args.yearOfManu
                })

                return stock.save()
            }
        },
        deleteStock: {
            type: stockType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const item = Stock.findOneAndDelete({ _id: args.id })

                return item
            }
        },
        updateProfile: {
            type: userType,
            args: {
                id: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
                firstName: { type: new GraphQLNonNull(GraphQLString) },
                lastName: { type: new GraphQLNonNull(GraphQLString) },
                position: { type: new GraphQLNonNull(GraphQLString) },
                password: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parent, args) {
                const user = User.findOneAndUpdate({ _id: args.id })
            }
        },
        fileUpload: {
            type: FileUploadResponseType,
            args:{
                file:{type:UploadType}
            },
            async resolve(parent, args){
                const { createReadStream,filename, mimetype } = await args.file.file;
                const stream = createReadStream();
                console.log(stream);
                const uniqueName:string =  fileRenamer(filename);
                const pathName = path.join(__dirname, '../../files/'+uniqueName);
                await stream.pipe(fs.createWriteStream(pathName));
                return {
                    success:true,
                    message:'file uploaded successfully'
                }
            }
        },
    }
})

const schema: GraphQLSchema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})


export default schema

