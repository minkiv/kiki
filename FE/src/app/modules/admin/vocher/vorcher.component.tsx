import { Form, Input, DatePicker, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import TemplateTable from '../common/template-table/template-table.component';
import { changeVorcher, createVorcher, deleteVorcher, getAllVorcher, searchVoucher } from './service/vorcher.service';
import moment from 'moment-timezone';
const { Option } = Select

const CategoryManagement = () => {
    const [column, setColumn] = useState([])
    const [reset, setReset] = useState<boolean>(true)
    const [dataVorcher, setDataVorcher] = useState<any>([])
    const convertToVietnamTime = (utcTime: any) => {
        return moment(utcTime).tz('Asia/Ho_Chi_Minh').format('YYYY-MM-DD HH:mm:ss');
    };
    useEffect(() => {
        getAllVorcher().then((res) => {
            setDataVorcher(res.data)
        })
    }, [reset])
    useEffect(() => {
        const columTemp: any = [];
        if (dataVorcher.length > 0) {
            Object.keys(dataVorcher[0]).forEach((itemKey) => {
                if (!['_id', '__v', 'createdAt', 'updatedAt', 'timeRemaining'].includes(itemKey)) {
                    if (itemKey === 'startday' || itemKey === 'endday') {
                        columTemp.push({
                            title: itemKey,
                            dataIndex: itemKey,
                            key: itemKey,
                            render: (text: any) => {
                                return convertToVietnamTime(text);
                            },
                        });
                    } else {
                        columTemp.push({
                            title: itemKey,
                            dataIndex: itemKey,
                            key: itemKey,
                        });
                    }
                }
            });

            columTemp.push({
                title: 'Time Remaining',
                dataIndex: 'timeRemaining',
                key: 'timeRemaining',
                render: (text: any, record: any) => {
                    if (record.startday && record.endday) {
                        const startTime = moment(record.startday);
                        const endTime: any = moment(record.endday);
                        const now: any = moment();

                        if (now.isBefore(endTime)) {
                            const remainingTime = moment.duration(endTime - now);
                            const hoursRemaining = remainingTime.hours();
                            const minutesRemaining = remainingTime.minutes();
                            const secondsRemaining = remainingTime.seconds();

                            return `${hoursRemaining} giờ ${minutesRemaining} phút ${secondsRemaining} giây còn lại`;
                        } else {
                            return 'Hết hạn';
                        }
                    }
                    return text;
                },
            });
        }

        setColumn(columTemp);
    }, [dataVorcher]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now: any = moment();
            const updatedDataVorcher = dataVorcher.map((voucher: any) => {
                if (now.isBefore(voucher.endday)) {
                    const remainingTime = moment.duration(voucher.endday - now);
                    const hoursRemaining = remainingTime.hours();
                    const minutesRemaining = remainingTime.minutes();
                    const secondsRemaining = remainingTime.seconds();
                    voucher.timeRemaining = `${hoursRemaining} giờ ${minutesRemaining} phút ${secondsRemaining} giây còn lại`;
                } else {
                    voucher.timeRemaining = 'Hết hạn';
                }
                return voucher;
            });
            // const nonExpiredVouchers = updatedDataVorcher.filter((voucher: any) => voucher.timeRemaining !== 'Hết hạn');
            // setDataVorcher(nonExpiredVouchers);
            // const allExpired = nonExpiredVouchers.every((voucher: any) => voucher.timeRemaining === 'Hết hạn');
            // if (allExpired) {
            //     clearInterval(intervalId);
            // }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [dataVorcher]);


    const handelGetList = () => {
        setReset(!reset)
    }
    return (
        <div>
            <TemplateTable searchFunc={searchVoucher} setData={setDataVorcher} dataTable={dataVorcher} changeFunc={changeVorcher} columnTable={column} handelGetList={handelGetList} createFunc={createVorcher} deleteFunc={deleteVorcher}
                formEdit={
                    <Fragment>
                         <Form.Item
                            label='Name Vorcher'
                            name='name'
                            rules={[{ required: true, message: 'Please input your Name Vorcher!' }]}
                        >
                            <Input />
                        </Form.Item>
                            <Form.Item
                            label="Type vorcher"
                            name="type"
                            rules={[{ required: true, message: 'Please select the Vorcher Type!' }]}
                            >
                            <Select>
                                <Option value="Ngày lễ">Ngày lễ</Option>
                                <Option value="Giới hạn">Giới hạn</Option>
                                <Option value="Mã Giảm giá">Mã Giảm giá</Option>
                            </Select>
                            </Form.Item>
                        <Form.Item
                            label='discount'
                            name='discount'
                            rules={[{ required: true, message: 'Please input your discount!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='code'
                            name='code'
                            rules={[{ required: true, message: 'Please input your code!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='startday'
                            name='startday'
                            rules={[{ required: true, message: 'Please input your startday!' }]}
                        >
                            <DatePicker format="YYYY-MM-DD" />
                        </Form.Item>

                        <Form.Item
                            label='endday'
                            name='endday'
                            rules={[{ required: true, message: 'Please input your endday!' }]}
                        >
                            <DatePicker format="YYYY-MM-DD" />
                        </Form.Item>

                    </Fragment>
                }
            />
        </div>
    )
}


export default CategoryManagement
