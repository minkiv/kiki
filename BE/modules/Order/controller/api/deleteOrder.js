import status from 'http-status';
import catchAsync from "../../../../utils/catchAsync.js";
import Order from '../../Model/Order.js';
import { deleteUsers } from '../../service/orderService.js';

const getOrderStatusById = catchAsync(async (req, res) => {
    const orderId = req.params.id; // Giả sử ID được truyền qua URL parameters

    // Sử dụng phương thức findById để tìm đơn hàng theo ID
    const order = await Order.findById(orderId);
    console.log(order)
    if (order) {
        // Lấy giá trị orderStatus từ đối tượng đơn hàng
        const orderStatus = order.orderStatus;
        if (orderStatus == "đang chờ duyệt") {
            await deleteUsers(req)
            return res.status(status.OK).json("huỷ thành công");
        }
        else {
            return res.status(status.NOT_FOUND).json({ message: "trạng thái này không được huỷ." });
        }

    }
});

export default getOrderStatusById;
