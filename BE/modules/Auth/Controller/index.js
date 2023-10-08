import registers from "./Api/register.js"
import signIn from "./Api/signIn.js"
import getAllUser from "./Api/getAllUser.js"
import getOneUser from "./Api/getOneUser.js"

const authController = {
    registers,
    signIn,
    getAllUser,
    getOneUser
}
export default authController