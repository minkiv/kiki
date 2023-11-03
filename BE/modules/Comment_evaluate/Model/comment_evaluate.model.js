import mongoose from "mongoose";

const comment_evaluateSchema = mongoose.Schema({

    user: {
        type: mongoose.Types.ObjectId,
        ref: "Auth"
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: "Product"
    },
    comment: String,
    star: {
        type: String,
        default: '5',
        enum: ['1','2','3','4','5'],
    },
},
    {
        timestamps: true
    }
)

export default mongoose.model("Comment_evaluate", comment_evaluateSchema)