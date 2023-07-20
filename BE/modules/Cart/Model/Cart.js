import mongoose, { Schema } from 'mongoose';
import { } from "../../Auth/Model/Auth.js";

const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: 'Auth',
    },
    carts: [
        {
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            },
            listQuantity: {
                nameColor: String,
                nameSize: String,
                quatity: Number
            }
        }
    ]
}, {
    timestamps: true
});

export default mongoose.model('Cart', cartSchema);


