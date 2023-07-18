import mongoose from "mongoose";
const colorSchema = mongoose.Schema({
    name: String
},
    {
        timestamps: true
    })
export default mongoose.model('Color', colorSchema) 