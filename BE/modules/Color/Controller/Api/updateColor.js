import catchAsync from "../../../../utils/catchAsync.js";
import status from "http-status"
import { updateColor } from "../../Service/Color.js";
import Color from "../../Model/Color.js";

const editColor = catchAsync(async (req, res) => {

    const nameColor = await Color.findOne({
        name: req.body.name
    })
    if (nameColor) {
        return res.status(status.BAD_REQUEST).json("màu này đã tồn tại")
    }
    const color = await updateColor(req)
    return res.status(status.OK).json(color)
})

export default editColor