import { Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import { changeCategory, createCategory, deleteCategory, getAllCategory, searchCategory } from "./service/category.service"
import TemplateTable from '../common/template-table/template-table.component';


const CategoryManagement = () => {
    const [column, setColumn] = useState([])
    const [reset, setReset] = useState<boolean>(true)
    const [dataCategory, setDataCategory] = useState<any>([])
    useEffect(() => {
        getAllCategory().then((res) => {
            setDataCategory(res.data)
        })
    }, [reset])
    useEffect(() => {
        const columTemp: any = [];
        const title = ['Ảnh','Danh mục']
        if (dataCategory.length > 0) {
            Object.keys(dataCategory[0]).forEach((itemKey,key=0) => {
                if (!['_id', '__v'].includes(itemKey)) {
                    columTemp.push({
                        title: title[key++],
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
    const handelGetList = () => {
        setReset(!reset)
    }
    return (
        <div>
            <TemplateTable searchFunc={searchCategory} setData={setDataCategory} dataTable={dataCategory} columnTable={column} deleteFunc={deleteCategory} createFunc={createCategory} handelGetList={handelGetList} changeFunc={changeCategory}
                formEdit={
                    <Fragment>
                        <Form.Item
                            label='Tên danh mục'
                            name='name'
                            rules={[{ required: true, message: 'Please input your name!' }]}
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