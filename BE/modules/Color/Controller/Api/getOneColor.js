import catchAsync from "../../../../utils/catchAsync.js";
import status from 'http-status'
import { getOneColor } from "../../Service/Color.js";

const getOneColors = catchAsync(async (req, res) => {
    const color = await getOneColor(req)
    return res.status(status.OK).json(color)
})
export default getOneColors