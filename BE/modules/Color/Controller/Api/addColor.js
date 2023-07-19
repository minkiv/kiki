import status from "http-status";
import { addColor } from "../../Service/Color.js";
import catchAsync from "../../../../utils/catchAsync.js";

const addColors = catchAsync(async (req, res) => {
    const colors = await addColor(req);
    return res.status(status.OK).json(colors)
})
export default addColors