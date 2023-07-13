import mongoose from 'mongoose'
const productSchema= mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    imgae:{
        type: Array,
        default: []
    },
    quantily: Number,
    brand: String,
    size: String,
    color: String,
    sale: Number,
    categoryID: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    authId: {
        type: mongoose.Types.ObjectId,
        ref: 'Auth'
    }
},
    {
        timestamps: true
    }
)
export default mongoose.model("Product", productSchema)