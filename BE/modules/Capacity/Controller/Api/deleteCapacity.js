import status from 'http-status'
import catchAsync from "../../../../utils/catchAsync.js";
import { deleteCapacity } from "../../Service/Capacity.js";

const deleteCapacitys = catchAsync(async (req, res) => {
    const remove = await deleteCapacity(req)
    return res.status(status.OK).json(remove)
})
export default deleteCapacitys