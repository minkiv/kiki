import Auth from "../Model/Auth.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (dataBody) => {
    const { password, email, phoneNumber } = dataBody
    const bcryptPassword = await bcrypt.hash(password, 10)
    const user = await Auth.create({
        password: bcryptPassword,
        email,
        phoneNumber
    })
    return user
}
export const signin = async (req) => {
    const user = req
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
        expiresIn: "5d",
    });
    user.password = undefined
    const auth = { user, accessToken: token }
    return auth
}

export const getAllUsers = async (req) => {
    const users = await Auth.find()
    return users
}
export const getOneUsers = async (req) => {
    const users = await Auth.findById(req.params.id)
    return users
}