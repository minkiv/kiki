import mongoose from "mongoose";


const orderSchema = mongoose.Schema({
    fullname: String,
    phoneNumber: {
        type: String,
        default: ""
    },
    district: {
        type: String,
        default: ""
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
        default: ""
    },
    orderStatus: {
        type: String,
        default: 'WAIT_FOR_CONFIRMATION',
        enum: ['WAIT_FOR_CONFIRMATION', 'PROCESSING', 'TRANSPORTED', 'DELIVERED', 'CANCELED'],
    },
    city: {
        type: String,
        default: ''
    },
    productOrder:[
        {
            product:{
                type:mongoose.Types.ObjectId,
                ref:"Product"
            },
            quantityOrder:{
                type:Object
            }
        }
    ]

},
    {
        timestamps: true
    }
)
export default mongoose.model("Order", orderSchema)