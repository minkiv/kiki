import Auth from "../Model/Auth.js";

export const signin= async(req)=>{
    const { email, phoneNumber} = req
    const user = {email, phoneNumber}
return user
}
