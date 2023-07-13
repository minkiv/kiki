import express from "express"
import cors from "cors"
import connectDB from "./config/connectDB.js"
import dotenv from "dotenv"
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

connectDB()

// app.use('/api/v1', routes)

const PORT = process.env.PORT || 8001

app.get('/', (req, res) => {
    return res.send('Start server success!')
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})