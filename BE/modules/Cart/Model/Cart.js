import mongoose from 'mongoose';
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
            typeOrder: {
                nameColor: String,
                nameSize: String,
                quantity: Number
            }
        }
    ],

}, {
    timestamps: true
});

export default mongoose.model('Cart', cartSchema);


