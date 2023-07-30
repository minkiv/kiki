import mongoose from "mongoose";
const capacitySchema = mongoose.Schema({
    name: String
},
    {
        timestamps: true
    })
export default mongoose.model('Capacity', capacitySchema) 