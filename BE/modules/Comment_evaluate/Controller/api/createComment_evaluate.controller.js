
import catchAsync from "../../../../utils/catchAsync.js";
import { createComment_avaluates } from "../../Service/comment_evaluate.service.js";
import status from 'http-status'

const createComment_avaluate = catchAsync(async(req, res)=> {
    const bodyData = {
        userId: req.user.id,
        productId: req.body.productId,
        comment: req.body.comment,
        star: req.body.star
    }
    await createComment_avaluates(bodyData)
    return res.status(status.OK).json('Đã bình luận thành công!')
})

export default createComment_avaluate