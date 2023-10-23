import crypto from "crypto";
import configs from "../../../config/configVnpay.js";
var secretKey = configs.vnPay.secret;

export const checkPaymentStatus = async (vnpayResponse) => {
    let vnp_Params = vnpayResponse;
    const secureHash = vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params); // Sử dụng trực tiếp, không cần `this`

    // const signData = new URLSearchParams(vnp_Params).toString()
    // const hmac = crypto.createHmac('sha512', secretKey);
    // const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

    if (vnp_Params['vnp_ResponseCode'] === '00') {
        const amount = vnp_Params['vnp_Amount'];
        const txnRef = vnp_Params['vnp_TxnRef'];
        // const { orderId, clientUrl } = JSON.parse(
        //     Object.keys(queryString.parse(vnp_Params['vnp_OrderInfo']))[0]
        // );
        const payDate = vnp_Params['vnp_PayDate']; // yyyyMMddHHmmss
        const bankCode = vnp_Params['vnp_BankCode'];
        const bankTranNo = vnp_Params['vnp_BankTranNo'];
        const cartType = vnp_Params['vnp_CardType'];
        const transactionNo = vnp_Params['vnp_TransactionNo'];

        let isSuccess = false, message = 'Payment failed';

        if (vnp_Params['vnp_ResponseCode'] === '00') {
            isSuccess = true;
            message = 'Payment success';
        }

        return {
            isSuccess: true,
            message: 'Payment success'
            // data: {
            //     amount, txnRef, orderId, clientUrl,
            //     payDate, bankCode, bankTranNo,
            //     cartType, transactionNo
            // },
        };
    } else {
        return {
            isSuccess: false,
            message: 'Invalid secure hash',
        };
    }
};

export const sortObject = (obj) => {
    const sorted = {};
    const str = [];
    let key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, '+');
    }
    return sorted;
};
