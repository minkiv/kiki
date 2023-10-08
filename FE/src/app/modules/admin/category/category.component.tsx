import { Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import { getAllCategory } from "./service/category.service"
import TemplateTable from '../common/template-table/template-table.component';


const CategoryManagement = () => {
    const [column, setColumn] = useState([])
    const [dataCategory, setDataCategory] = useState<any>([])
    useEffect(() => {
        getAllCategory().then((res) => {
            setDataCategory(res.data)
        })
    }, [])
    useEffect(() => {
        const columTemp: any = []
        if (dataCategory.length > 0) {
            Object.keys(dataCategory[0]).forEach((itemKey) => {
                if (!['_id', '__v', 'updatedAt'].includes(itemKey)) {
                    columTemp.push({
                        title: itemKey,
                        dataIndex: itemKey,
                        key: itemKey,
                        render: (text: any, record: any, index: any) => {
                            if (itemKey === 'image' && dataCategory[index]?.image && dataCategory[index].image.length > 0) {
                                return (
                                    <img
                                        src={dataCategory[index].image}
                                        alt="Category Image"
                                        style={{ maxWidth: '50px' }}
                                    />
                                );
                            }
                            return text;
                        },
                    });
                }
            });
        }

        setColumn(columTemp)
    }, [dataCategory])
    return (
        <div>
            <TemplateTable dataTable={dataCategory} columnTable={column}
                formEdit={
                    <Fragment>


                        <Form.Item
                            label='name'
                            name='name'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label='imgage'
                            name='imgage'
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input />
                        </Form.Item>
                    </Fragment>
                }
            />
        </div>
    )
}


export default CategoryManagement