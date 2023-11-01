import React, { useState, useEffect } from 'react';
import { Select, Button, DatePicker, Row, Col } from 'antd';
import { Line } from '@ant-design/plots';
import { getAllOrderByStatus } from './service/statistics.service';
import LayoutLoading from '~/app/component/stack/layout-loadding/layout-loadding.component';
import moment from 'moment';

const { Option } = Select;
const { RangePicker } = DatePicker;

const Statistical = () => {
    const [dataChart, setDataChart] = useState<any>([]);
    const [dataRequest, setDataRequest] = useState({
        startDate: '',
        endDate: '',
        granularity: 'day',
    });

    useEffect(() => {
        handleStatistical();
    }, [dataRequest]);
    useEffect(() => {
        getAllOrderByStatus({
            startDate: '2023-10-20',
            endDate: '2023-10-26',
        }).then((res) => {
            const orderChartData = res.data.listOrderChart;
            const orderData = res.data.orders;
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

        if (res.data) {
            const orderChartData = res.data.listOrderChart;
            const orderData = res.data.orders;
            let totalPrices = [];

            if (dataRequest.granularity === 'day') {
                totalPrices = orderChartData.map((chartData: any) => {
                    const date = chartData.date;
                    const totalPrice = orderData
                        .filter((order: any) => order.createdAt.startsWith(date))
                        .reduce((total: any, order: any) => total + order.totalprice, 0);
                    return {
                        date,
                        totalprice: totalPrice,
                        subtotal: chartData.subtotal,
                    };
                });
            } if (dataRequest.granularity === 'week') {
                totalPrices = orderChartData.map((chartData: any) => {
                    const date = chartData.date;
                    const weekNumber = moment(date, 'YYYY-MM-DD').isoWeek();
                    const totalPrice = orderData
                        .filter((order: any) => moment(order.createdAt, 'YYYY-MM-DD').isoWeek() === weekNumber)
                        .reduce((total: any, order: any) => total + order.totalprice, 0);
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
                    const totalPrice = orderData
                        .filter((order: any) => moment(order.createdAt, 'YYYY-MM-DD').format('MM/YYYY') === month)
                        .reduce((total: any, order: any) => total + order.totalprice, 0);
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
                    const totalPrice = orderData
                        .filter((order: any) => moment(order.createdAt, 'YYYY-MM-DD').format('YYYY') === year)
                        .reduce((total: any, order: any) => total + order.totalprice, 0);
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
            <div className='py-10'>
                <Row justify='center'>
                    <Col span={6}>
                        <Select
                            defaultValue="day"
                            style={{ width: 120 }}
                            onChange={handleGranularityChange}
                        >
                            <Option value="day">Ngày</Option>
                            <Option value="week">Tuần</Option>
                            <Option value="month">Tháng</Option>
                            <Option value="year">Năm</Option>
                        </Select>
                    </Col>
                    <Col span={6}>
                        <RangePicker format={'YYYY-MM-DD'} onChange={onChange} />
                    </Col>
                    <Col span={1}>
                        <Button type='primary' onClick={handleStatistical}>
                            Thống kê
                        </Button>
                    </Col>
                </Row>
            </div>
            <div className='chart'>
                <h1 className='py-10 font-semibold'>Biểu đồ thống kê</h1>
                <Line {...config} />
            </div>
            <div className='py-10'>
                <h1>Danh sách đơn hàng</h1>
            </div>
        </LayoutLoading>
    );
};

export default Statistical;
