import createSupport from "./api/createSupport.controller.js"
import getAllSupport from "./api/getAllSupport.controller.js"
import updateSupport from "./api/updateSupport.controller.js"
import deleteSupport from "./api/deleteSupport.controller.js"
import repSupport from "./api/repSupport.controller.js"
repSupport
const supportController = {
    createSupport,
    getAllSupport,
    updateSupport,
    deleteSupport,
    repSupport
}
export default supportController