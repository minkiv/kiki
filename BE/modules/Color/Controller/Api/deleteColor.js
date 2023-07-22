import status from 'http-status'
import catchAsync from "../../../../utils/catchAsync.js";
import { deleteColor } from "../../Service/Color.js";

const deleteColors = catchAsync(async (req, res) => {
    const remove = await deleteColor(req)
    return res.status(status.OK).json(remove)
})
export default deleteColors