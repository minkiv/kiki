import catchAsync from "../../../../utils/catchAsync.js";
import status from "http-status"
import { updateCapacity } from "../../Service/Capacity.js";
import Capacity from "../../Model/capacity.js";

const editCapacity = catchAsync(async (req, res) => {

    const nameCapacity = await Capacity.findOne({
        name: req.body.name
    })
    if (nameCapacity) {
        return res.status(status.BAD_REQUEST).json("dung lượng này đã tồn tại")
    }
    const Capacitys = await updateCapacity(req)
    return res.status(status.OK).json(Capacity)
})

export default editCapacity