import mongoose from "mongoose";

const vorcherSchema = mongoose.Schema({
    discount: Number,
    code: String,
    startday: String,
    endday: String
},
    {
        timestamps: true
    }
)
export default mongoose.model("Vorcher", vorcherSchema)