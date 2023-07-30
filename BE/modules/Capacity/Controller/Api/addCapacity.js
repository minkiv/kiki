import status from "http-status";
import { addCapacity } from "../../Service/Capacity.js";
import catchAsync from "../../../../utils/catchAsync.js";
import Capacity from "../../Model/capacity.js";

const addCapacitys = catchAsync(async (req, res) => {
    const nameCapacity = await Capacity.findOne({
        name: req.body.name
    })
    if (nameCapacity) {
        return res.status(status.BAD_REQUEST).json("dung lượng này đã tồn tại")
    }
    const Capacitys = await addCapacity(req);
    return res.status(status.OK).json(Capacitys)
})
export default addCapacitys