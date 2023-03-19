import  { Schema, Document, Model, model } from 'mongoose'


interface User extends Document {
    email:string,
    firstName: string,
    lastName: string,
    position:string
    password:string
    token:string
    avatar: {
        data: BufferConstructor;
        contentType: StringConstructor;
    }
}



const userSchema = new Schema<User>({
    email: String,
    firstName: String,
    lastName: String,
    position: String,
    password: String,
    token: String,
    avatar:{
        data:Buffer,
        contentType: String
    }
}, { timestamps: true })



const User: Model<User> = model("Users", userSchema)

export default User