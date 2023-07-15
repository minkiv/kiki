import mongoose from "mongoose";
const categorySchema = mongoose.Schema({
    name: String,
    image: {
        type: String,
        default:''
    }
},
    {
        timestamps: true
})
export default mongoose.model('Category', categorySchema)
