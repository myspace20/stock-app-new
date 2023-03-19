import {model, Model ,Document, Schema } from 'mongoose'

interface Stock extends Document {
    name:string,
    supplier:string,
    type:string,
    image:{
        data: BufferConstructor;
        contentType: StringConstructor;
    }
    
}

const stockSchema  = new Schema <Stock>({
    name: String,
    supplier: String,
    type: String,
    image:{
        data:Buffer,
        contentType: String
    }

})


const Stock: Model<Stock> = model('stocks', stockSchema)
export default Stock