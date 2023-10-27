import React, { useEffect, useState } from 'react';
import { getAllOrder, getAllStatistics } from './service/statistics.service';
import Chart from 'chart.js/auto';

const StatisticsComponent = () => {
    const [statisticsData, setStatisticsData] = useState([]);
    useEffect(() => {

        getAllOrder().then((res) => {
            const dailyData: any = {};
            const weeklyData: any = {};
            const monthlyData: any = {};
            const yearlyData: any = {};

            res.data.forEach((order: any) => {
                const date = new Date(order.createdAt);

                const dailyKey = date.toDateString();
                dailyData[dailyKey] = (dailyData[dailyKey] || 0) + order.totalprice;

                const startOfWeek = new Date(date);
                startOfWeek.setDate(date.getDate() - date.getDay() + 1);
                const endOfWeek = new Date(startOfWeek);
                endOfWeek.setDate(startOfWeek.getDate() + 6);
                const weekKey = `${startOfWeek.toDateString()} - ${endOfWeek.toDateString()}`;
                weeklyData[weekKey] = (weeklyData[weekKey] || 0) + order.totalprice;

                const monthlyKey = `${date.getFullYear()}-${date.getMonth() + 1}`;
                monthlyData[monthlyKey] = (monthlyData[monthlyKey] || 0) + order.totalprice;

                const yearKey = date.getFullYear().toString();
                yearlyData[yearKey] = (yearlyData[yearKey] || 0) + order.totalprice;
            });

            const dailyChartLabels = Object.keys(dailyData);
            const dailyChartValues = Object.values(dailyData);
            createChart('dailyChart', 'Tổng số tiền theo ngày', dailyChartLabels, dailyChartValues);

            const weeklyChartLabels = Object.keys(weeklyData);
            const weeklyChartValues = Object.values(weeklyData);
            createChart('weeklyChart', 'Tổng số tiền theo tuần', weeklyChartLabels, weeklyChartValues);

            const monthlyChartLabels = Object.keys(monthlyData);
            const monthlyChartValues = Object.values(monthlyData);
            createChart('monthlyChart', 'Tổng số tiền theo tháng', monthlyChartLabels, monthlyChartValues);

            const yearChartLabels = Object.keys(yearlyData);
            const yearChartValues = Object.values(yearlyData);
            createChart('yearlyChart', 'Tổng số tiền theo năm', yearChartLabels, yearChartValues);
            getAllStatistics().then((res) => {
                const doughnutLabels = res.data.map((item: any) => item.name);
                const doughnutValues = res.data.map((item: any) => item.totalSold);
                createDoughnutChart('doughnutChart', doughnutLabels, doughnutValues);
            });

        });
    }, []);

    const createChart = (chartId: any, label: any, labels: any, values: any) => {
        const chartCtx: any = document.getElementById(chartId);
        new Chart(chartCtx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: label,
                        data: values,
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        borderColor: 'rgba(54, 162, 235)',
                        borderWidth: 1,
                    },
                ],
            },
        });
    };

    const createDoughnutChart = (chartId: any, labels: any, values: any) => {
        const chartCtx: any = document.getElementById(chartId);
        new Chart(chartCtx, {
            type: 'doughnut',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6',
                    ],
                }],
            },
        });
    };

    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='w-[600px]'>
                    <h2 className='font-semibold text-[18px]'>Thống kê số tổng số tiền theo ngày</h2>
                    <canvas id="dailyChart" style={{ width: '100%', height: '270px' }}></canvas>
                </div>
                <div className='w-[600px]'>
                    <h2 className='font-semibold text-[18px]'>Thống kê số tổng số tiền theo tuần</h2>
                    <canvas id="weeklyChart" style={{ width: '100%', height: '270px' }}></canvas>
                </div>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <div className='w-[600px]'>
                    <h2 className='font-semibold text-[18px]'>Thống kê số tổng số tiền theo tháng</h2>
                    <canvas id="monthlyChart" style={{ width: '100%', height: '270px' }}></canvas>
                </div>
                <div className='w-[600px]'>
                    <h2 className='font-semibold text-[18px]'>Thống kê số tổng số tiền theo năm</h2>
                    <canvas id="yearlyChart" style={{ width: '100%', height: '270px' }}></canvas>
                </div>
            </div>
            <div className="mt-4 h-[500px] w-[90%] m-auto flex flex-col items-center">
                <h2 className="font-semibold text-[18px]">Thống kê sản phẩm</h2>
                <canvas id="doughnutChart" className='w-[100%]'></canvas>
            </div>

        </>
    );
};

export default StatisticsComponent;
