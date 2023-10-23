
import { checkPaymentStatus } from '../service/payment.service.js';
import catchAsync from './../../../utils/catchAsync.js';
const getStatusPayment = catchAsync(async (req, res) => {
  const result = await checkPaymentStatus(req.query);
  let message = '';
  if (result.isSuccess) {
    message = 'Thanh toán thành công';
  } else {
    message = 'Thanh toán thất bại';
  }
  res.send(`
      <script>
        alert('${message}');
         window.open('http://127.0.0.1:3000/manage', '_self', '')
      </script>
    `);
})

export default getStatusPayment