import Auth from "../Model/Auth.js"
import bcrypt from 'bcrypt'

export const register = async(dataBody)=>{
    const {password, email, phoneNumber} = dataBody
    const bcryptPassword = await bcrypt.hash(password, 10)
    const user = await Auth.create({
        password: bcryptPassword,
        email,
        phoneNumber
    })
    return user
}
export const signin= async(req)=>{
    const { email, phoneNumber} = req
    const user = {email, phoneNumber}
return user
}
