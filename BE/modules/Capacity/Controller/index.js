import addCapacitys from "./Api/addCapacity.js";
import getAllCapacitys from "./Api/getAllCapacity.js";
import getOneCapacitys from "./Api/getOneCapacity.js";
import editCapacity from "./Api/updateCapacity.js";
import deleteCapacitys from "./Api/deleteCapacity.js";


const capacityController = {
    addCapacitys,
    getAllCapacitys,
    getOneCapacitys,
    editCapacity,
    deleteCapacitys
}
export default capacityController