import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getAllCapacity } from "../../Service/Capacity.js";

const getAllCapacitys = catchAsync(async (req, res) => {
    const Capacity = await getAllCapacity()
    return res.status(status.OK).json(Capacity)
})
export default getAllCapacitys