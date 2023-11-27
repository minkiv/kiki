import React, { useState, useEffect } from 'react';
import { Select, Button, DatePicker, Row, Col } from 'antd';
import { Line, Pie } from '@ant-design/plots';
import { getAllOrder, getAllOrderByStatus, getAllStatistics } from './service/statistics.service';
import LayoutLoading from '~/app/component/stack/layout-loadding/layout-loadding.component';
import moment from 'moment';
import { FaMoneyCheckAlt } from "react-icons/fa"

const { Option } = Select;
const { RangePicker } = DatePicker;

const Statistical = () => {
    const [dataChart, setDataChart] = useState<any>([]);
    const [dataResponse, setDataResponse] = useState<any>({})
    const [dataRequest, setDataRequest] = useState({
        startDate: '',
        endDate: '',
        granularity: 'day',
    });
    const [orders, setOrders] = useState<any>([])
    const [productSalesData, setProductSalesData] = useState<any>([]);
    useEffect(() => {
        getAllOrder().then((res) => {
            const completedOrders = res.data.filter((order: any) => order.orderStatus === "hoàn thành");
            setOrders(completedOrders);
        })
    }, [])

    useEffect(() => {
        const productSales: any = {};
        orders.forEach((order: any) => {
            order.productOrder.forEach((productOrder: any) => {
                const productId = productOrder.product.name;
                const quantitySold = productOrder.quantityOrder.quantity;

                if (productSales[productId]) {
                    productSales[productId] += quantitySold;
                } else {
                    productSales[productId] = quantitySold;
                }
            });
        });
        const productSalesArray = Object.entries(productSales).map(([productId, quantity]) => ({
            productId,
            quantity,
        }));
        setProductSalesData(productSalesArray);
    }, [orders]);
    const conFig = {
        data: productSalesData,
        appendPadding: 10,
        angleField: 'quantity',
        colorField: 'productId',
        radius: 0.8,
        label: {
            type: 'outer',
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    useEffect(() => {
        handleStatistical();
    }, [dataRequest]);
    useEffect(() => {
        getAllOrderByStatus({
            startDate: '2023-11-01',
            endDate: '2023-11-06',
        }).then((res) => {
            const orderChartData = res.data.listOrderChart;
            const orderData = res.data.orders.filter((order: any) => order.orderStatus === "hoàn thành");
            setDataResponse(res.data)
            const totalPrices = orderChartData.map((chartData: any) => {
                const date = chartData.date;
                const totalPrice = orderData
                    .filter((order: any) => order.createdAt.startsWith(date))
                    .reduce((total: any, order: any) => total + order.totalprice, 0);
                return {
                    date,
                    totalprice: totalPrice,
                    subtotal: chartData.subtotal
                };
            });

            setDataChart(totalPrices);
        });
    }, []);
    const handleStatistical = async () => {

        setDataChart([]);
        const res = await getAllOrderByStatus(dataRequest);
        setDataResponse(res.data)
        if (res.data) {
            const orderChartData = res.data.listOrderChart;
            const orderData = res.data.orders;
            let totalPrices = [];

            if (dataRequest.granularity === 'day') {
                const productSales: any = {};
                totalPrices = orderChartData.map((chartData: any) => {
                    const date = chartData.date;
                    const ordersInDay = orders.filter((order: any) => {
                        const orderDate = moment(order.createdAt).format('YYYY-MM-DD');
                        return orderDate === date;
                    });
                    const totalPrice = ordersInDay.reduce((total: any, order: any) => total + order.totalprice, 0);
                    ordersInDay.forEach((order: any) => {
                        order.productOrder.forEach((productOrder: any) => {
                            const productId = productOrder.product.name;
                            const quantitySold = productOrder.quantityOrder.quantity;

                            if (productSales[productId]) {
                                productSales[productId] += quantitySold;
                            } else {
                                productSales[productId] = quantitySold;
                            }
                        });
                    });

                    const productSalesArray = Object.entries(productSales).map(([productId, quantity]) => ({
                        productId,
                        quantity,
                    }));
                    setProductSalesData(productSalesArray);

                    return {
                        date,
                        totalprice: totalPrice,
                        subtotal: chartData.subtotal,
                    };
                });
            }

            if (dataRequest.granularity === 'week') {
                totalPrices = orderChartData.map((chartData: any) => {
                    const date = chartData.date;
                    const weekNumber = moment(date, 'YYYY-MM-DD').isoWeek();
                    const ordersInWeek = orders.filter((order: any) => {
                        return moment(order.createdAt, 'YYYY-MM-DD').isoWeek() === weekNumber;
                    });
                    const totalPrice = ordersInWeek.reduce((total: any, order: any) => total + order.totalprice, 0);

                    const productSales: any = {};
                    ordersInWeek.forEach((order: any) => {
                        order.productOrder.forEach((productOrder: any) => {
                            const productId = productOrder.product.name;
                            const quantitySold = productOrder.quantityOrder.quantity;

                            if (productSales[productId]) {
                                productSales[productId] += quantitySold;
                            } else {
                                productSales[productId] = quantitySold;
                            }
                        });
                    });

                    const productSalesArray = Object.entries(productSales).map(([productId, quantity]) => ({
                        productId,
                        quantity,
                    }));
                    setProductSalesData(productSalesArray);

                    return {
                        date: `Tuần ${weekNumber}`,
                        totalprice: totalPrice,
                        subtotal: chartData.subtotal,
                    };
                });
            }

            if (dataRequest.granularity === 'month') {
                totalPrices = orderChartData.map((chartData: any) => {
                    const date = chartData.date;
                    const month = moment(date, 'YYYY-MM-DD').format('MM/YYYY');
                    const ordersInMonth = orders.filter((order: any) => {
                        return moment(order.createdAt, 'YYYY-MM-DD').format('MM/YYYY') === month;
                    });
                    const totalPrice = ordersInMonth.reduce((total: any, order: any) => total + order.totalprice, 0);
                    const productSales: any = {};
                    ordersInMonth.forEach((order: any) => {
                        order.productOrder.forEach((productOrder: any) => {
                            const productId = productOrder.product.name;
                            const quantitySold = productOrder.quantityOrder.quantity;

                            if (productSales[productId]) {
                                productSales[productId] += quantitySold;
                            } else {
                                productSales[productId] = quantitySold;
                            }
                        });
                    });

                    const productSalesArray = Object.entries(productSales).map(([productId, quantity]) => ({
                        productId,
                        quantity,
                    }));
                    setProductSalesData(productSalesArray);

                    return {
                        date: month,
                        totalprice: totalPrice,
                        subtotal: chartData.subtotal,
                    };
                });
            }

            if (dataRequest.granularity === 'year') {
                totalPrices = orderChartData.map((chartData: any) => {
                    const date = chartData.date;
                    const year = moment(date, 'YYYY-MM-DD').format('YYYY');
                    const ordersInYear = orders.filter((order: any) => {
                        return moment(order.createdAt, 'YYYY-MM-DD').format('YYYY') === year;
                    });
                    const totalPrice = ordersInYear.reduce((total: any, order: any) => total + order.totalprice, 0);
                    const productSales: any = {};
                    ordersInYear.forEach((order: any) => {
                        order.productOrder.forEach((productOrder: any) => {
                            const productId = productOrder.product.name;
                            const quantitySold = productOrder.quantityOrder.quantity;

                            if (productSales[productId]) {
                                productSales[productId] += quantitySold;
                            } else {
                                productSales[productId] = quantitySold;
                            }
                        });
                    });

                    const productSalesArray = Object.entries(productSales).map(([productId, quantity]) => ({
                        productId,
                        quantity,
                    }));
                    setProductSalesData(productSalesArray);

                    return {
                        date: year,
                        totalprice: totalPrice,
                        subtotal: chartData.subtotal,
                    };
                });
            }



            setDataChart(totalPrices);
        }
    };


    const handleGranularityChange = (value: string) => {
        setDataRequest((prev) => ({
            ...prev,
            granularity: value,
        }));
    };

    const onChange = (value: any, dateString: [string, string]) => {
        setDataRequest((prev) => ({
            ...prev,
            startDate: dateString[0],
            endDate: dateString[1],
        }));
    };

    const config: any = {
        data: dataChart,
        padding: 'auto',
        xField: 'date',
        yField: 'totalprice',
        xAxis: {
            tickCount: 10,
        },
        legend: {
            position: 'top',
        },
        smooth: true,
        animation: {
            appear: {
                animation: 'path-in',
                duration: 5000,
            },
        },
    };

    return (
        <LayoutLoading condition={dataChart.length === 0}>
            <div className='bg-blue-500 rounded-lg p-6 mb-8 block w-[300px] h-44'>
                <div className='flex'>
                    <div className='text-4xl text-white font-semibold'>Doanh Thu</div>
                    <div className='pl-40'><FaMoneyCheckAlt className='text-5xl text-white' /></div>
                </div>
                <div className='text-white text-3xl font-bold pt-2'>{dataResponse?.totalQuantity?.toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
            </div>

            <div className='py-5'>
                <Row justify='center'>

                    <Col span={6}>
                        <RangePicker format={'YYYY-MM-DD'} onChange={onChange} />
                    </Col>
                    <Col span={6}>
                        <Select
                            defaultValue="day"
                            style={{ width: 200 }}
                            onChange={handleGranularityChange}
                        >
                            <Option value="day">Ngày</Option>
                            <Option value="week">Tuần</Option>
                            <Option value="month">Tháng</Option>
                            <Option value="year">Năm</Option>
                        </Select>
                    </Col>
                    <Col span={1}>
                        <Button type='primary' onClick={handleStatistical}>
                            Thống kê
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='chart'>
                <h1 className='py-10 font-semibold text-4xl'>Biểu đồ thống kê</h1>
                <Line {...config} />
            </div>
            <div className='py-10 my-10'>
                <h1 className='mt-10 font-semibold text-4xl'>Thống kê sản phẩm</h1>
                <Pie {...conFig} />
            </div>
        </LayoutLoading>
    );
};

export default Statistical;
