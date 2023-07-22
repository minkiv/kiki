import addColors from "./Api/addColor.js";
import getAllColors from "./Api/getAllColor.js";
import getOneColors from "./Api/getOneColor.js";
import editColor from "./Api/updateColor.js";
import deleteColors from "./Api/deleteColor.js";


const colorController = {
    addColors,
    getAllColors,
    getOneColors,
    editColor,
    deleteColors
}
export default colorController