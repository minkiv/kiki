import mongoose, { Schema } from 'mongoose';
import { } from "../../Auth/Model/Auth.js";

const cartSchema = mongoose.Schema({
    idUser: {
        type: mongoose.Types.ObjectId,
        // ref: "../../Auth/Model/Auth.js"
        ref: "Auth"
    },
    carts: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type: Number
    }
})
export default mongoose.model('Cart', cartSchema);


