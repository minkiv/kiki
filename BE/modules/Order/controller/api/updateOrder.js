import { updateOrder } from '../../service/orderService.js';
import catchAsync from './../../../../utils/catchAsync.js';
import status from 'http-status';
const updateOders = catchAsync(async (req, res) => {
    await updateOrder(req)
    return res.status(status.OK).json(`Đã chuyển đổi trạng thái thành ${req.body.orderStatus}`)
})
export default updateOders

