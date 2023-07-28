import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getAllColor } from "../../Service/Color.js";

const getAllColors = catchAsync(async (req, res) => {
    const color = await getAllColor()
    return res.status(status.OK).json(color)
})
export default getAllColors