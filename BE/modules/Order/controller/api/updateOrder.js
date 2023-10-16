import { updateOrder } from '../../service/orderService.js';
import catchAsync from './../../../../utils/catchAsync.js';
import status from 'http-status';
const updateOders = catchAsync(async (req, res) => {
    const order = await updateOrder(req)
    if(!order){
        return res.status(status.BAD_REQUEST).json(`Không thể chuyển đổi trạng thái này`)
    }
    return res.status(status.OK).json(`Đã chuyển đổi trạng thái thành ${req.body.orderStatus}`)
})
export default updateOders

