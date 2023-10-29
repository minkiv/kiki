import registers from "./Api/register.js"
import signIn from "./Api/signin.js";
import getAllUser from "./Api/getAllUser.js"
import getOneUser from "./Api/getOneUser.js"
import deleteUser from './Api/deleteUser.js';
import updateUser from './Api/updateUser.js';
import sendEmail from "./Api/forgotPassword.js";
const authController = {
    registers,
    signIn,
    getAllUser,
    getOneUser,
    deleteUser,
    updateUser,
    sendEmail
}
export default authController