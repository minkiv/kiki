import status from 'http-status';
import catchAsync from "../../../../utils/catchAsync.js";
import Order from '../../Model/Order.js';
import { deleteUsers } from '../../service/orderService.js';

const getOrderStatusById = catchAsync(async (req, res) => {
    const orderId = req.params.id;
    const order = await Order.findById(orderId);
    console.log(order)
    if (order) {
        const orderStatus = order.orderStatus;
        if (orderStatus == "đang chờ duyệt") {
            await deleteUsers(req)
            return res.status(status.OK).json("huỷ thành công");
        }
        else {
            return res.status(status.NOT_FOUND).json("trạng thái này không được huỷ.");
        }

    }
});

export default getOrderStatusById;
