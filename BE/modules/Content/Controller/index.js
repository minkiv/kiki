import getAllContents from "./Api/getAllcontent.js"
import addContents from "./Api/addContent.js"
import updateContents from "./Api/updateContent.js"
import removeContents from "./Api/removeContent.js"
const contentController = {
  getAllContents,
  removeContents,
  addContents,
  updateContents
}
export default contentController