import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const db = await mongoose.connect('mongodb+srv://kikistore:kiki123456@cluster0.5bqiiiz.mongodb.net/appkiki?retryWrites=true&w=majority')

        console.log(`MongoDB connected ${db.connection.host}`);
    } catch (err) {
        console.log(`Error to connect db ${err.message}`);
    }
}

export default connectDB