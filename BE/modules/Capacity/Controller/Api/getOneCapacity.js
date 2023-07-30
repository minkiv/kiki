import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getOneCapacity } from "../../Service/Capacity.js";

const getOneCapacitys = catchAsync(async (req, res) => {
    const Capacity = await getOneCapacity(req)
    return res.status(status.OK).json(Capacity)
})
export default getOneCapacitys