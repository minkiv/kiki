import React, { useEffect, useState } from 'react';
import { getAllOrder } from './service/statistics.service';
import Chart from 'chart.js/auto';

const StatisticsComponent = () => {
    // const [dataOrder, setDataOrder] = useState<any>([]);

    useEffect(() => {
        getAllOrder().then((res) => {
            const dailyData: any = {};
            const monthlyData: any = {};

            res.data.forEach((order: any) => {
                const date = new Date(order.createdAt);

                const dailyKey = date.toDateString();
                if (dailyData[dailyKey]) {
                    dailyData[dailyKey] += order.totalprice;
                } else {
                    dailyData[dailyKey] = order.totalprice;
                }

                const monthlyKey = `${date.getFullYear()}-${date.getMonth() + 1}`
                if (monthlyData[monthlyKey]) {
                    monthlyData[monthlyKey] += order.totalprice
                }
                else {
                    monthlyData[monthlyKey] = order.totalprice
                }
            });

            const dailyChartLabels = Object.keys(dailyData);
            const dailyChartValues = Object.values(dailyData);
            const monthChartLabels = Object.keys(monthlyData);
            const monthChartValues = Object.values(monthlyData);

            const dailyChartCtx = document.getElementById('dailyChart') as HTMLCanvasElement;
            const dailyChart = new Chart(dailyChartCtx, {
                type: 'bar',
                data: {
                    labels: dailyChartLabels,
                    datasets: [
                        {
                            label: 'Tổng số tiền theo ngày',
                            data: dailyChartValues,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
            });


            const monthlyChartCtx = document.getElementById('monthlyChart') as HTMLCanvasElement;
            const monthlyChart = new Chart(monthlyChartCtx, {
                type: 'bar',
                data: {
                    labels: monthChartLabels,
                    datasets: [
                        {
                            label: 'Tổng số tiền theo tháng',
                            data: monthChartValues,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
            });
        });
    }, []);

    return (
        <div className=' flex justify-between items-center'>
            <div className='w-[600px]'>
                <h2>Thống kê số tổng số tiền theo ngày</h2>
                <canvas id="dailyChart" style={{ width: '100%', height: '300px' }}></canvas>
            </div>
            <div className='w-[600px]'>
                <h2>Thống kê số tổng số tiền theo tháng</h2>
                <canvas id="monthlyChart" style={{ width: '100%', height: '300px' }}></canvas>
            </div>
        </div>

    );
};

export default StatisticsComponent;
