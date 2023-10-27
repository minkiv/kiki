import Product from "../../Product/Model/Product.js"
import Order from "../../Order/Model/Order.js"
export const getStatistics = async () => {
    const orders = await Order.find();

    const productPurchaseCount = {};

    orders.forEach(order => {
        order.productOrder.forEach(item => {
            const productId = item.product._id;
            const quantity = item.quantityOrder.quantity;
            if (productPurchaseCount[productId]) {
                productPurchaseCount[productId] += quantity;
            } else {
                productPurchaseCount[productId] = quantity;
            }
        });
    });

    const products = await Product.find();

    const result = products.map(product => ({
        name: product.name,
        totalSold: productPurchaseCount[product._id] || 0
    }));

    result.sort((a, b) => b.totalSold - a.totalSold);

    return result;
}