import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        name: String,
        price: Number,
        cost: Number,
        description: String,
        images: {
            type: Array,
            default: [],
        },
        userId: {
            type: mongoose.Types.ObjectId,
            ref: 'Auth',
        },
        brand: String,
        listQuantityRemain: [
            {
                nameColor: String,
                nameSize: String,
                quantity: Number,
            },
        ],
        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
        },
    },
    {
        timestamps: true,
    },
)

export default mongoose.model('Product', productSchema)