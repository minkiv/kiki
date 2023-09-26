import mongoose from 'mongoose'
const authSchema = mongoose.Schema({
    fullname: String,
    nickname: String,
    email: {
        type: String,
        default: '',
        unique: true
    },
    birthday: {
        type: Date
    },
    phoneNumber: {
        type: String,
        default: '',
        unique: true
    },
    password: {
        type: String,
        require: true,
        min: 8
    },
    gender: String,
    address: {
        type: String,
        default: "",
        require: true
    },
    role: {
        type: String,
        enum: ["USER", "USER_STORE", "ADMIN"],
        default: "USER"
    }
}, {
    timestamps: true
})
export default mongoose.model("Auth", authSchema)