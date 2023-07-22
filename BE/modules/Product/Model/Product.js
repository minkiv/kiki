import mongoose from 'mongoose'
const productSchema = mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    images: {
        type: Array,
        default: []
    },
    listQuantityRemain: [
        {
            nameColor: String,
            nameSize: String,
            quantity: Number,
        },
    ],
    brand: String,
    categoryId: {
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