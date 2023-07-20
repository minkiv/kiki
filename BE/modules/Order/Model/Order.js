import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    fullName: String,
    phoneNumber: {
        type: String,
        default: ""
    },
    district: {
        type: String,
        default:""
    },
    commune: {
        type: String,
        default: ""
    },
    locationDetail: {
        type: String,
        default: ""
    },
    defaultLocation: {
        type: String,
        default:""
    },
    orderStatus: {
        WaitForPay: String,
        Processing: String,
        transport: String,
        Delivered: String,
        Canceled: String
    },
    city: {
        type: String,
        default: ''
    },
    cartId: {
      type: mongoose.Types.ObjectId,
      ref:'Cart'
    },

},
{
    timestamps: true
}
)