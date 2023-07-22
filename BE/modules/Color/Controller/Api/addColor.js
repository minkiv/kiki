import status from "http-status";
import { addColor } from "../../Service/Color.js";
import catchAsync from "../../../../utils/catchAsync.js";
import Color from "../../Model/Color.js";

const addColors = catchAsync(async (req, res) => {
    const nameColor = await Color.findOne({
        name: req.body.name
    })
    if (nameColor) {
        return res.status(status.BAD_REQUEST).json("màu này đã tồn tại")
    }
    const colors = await addColor(req);
    return res.status(status.OK).json(colors)
})
export default addColors