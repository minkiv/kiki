import { Button, Form, Input, Select } from 'antd'
import { Fragment, useEffect, useState } from 'react'
import { changeContent, createContent, deleteContent, getAllContent } from './service/content.service';
import TemplateTable from '../common/template-table/template-table.component';
import { Option } from 'antd/es/mentions';


const ContentManagement = () => {
    const [column, setColumn] = useState<any>([]);
    const [reset, setReset] = useState<boolean>(true);
    const [dataContent, setDataContent] = useState<any>([]);
    useEffect(() => {
        getAllContent().then((res) => {
          setDataContent(res.data);
        });
      }, [reset]);
      useEffect(() => {
        const columTemp: any = []
        if (dataContent.length > 0) {
            Object.keys(dataContent[0]).forEach((itemKey) => {
                if (!['_id', '__v','updatedAt','createdAt'].includes(itemKey)) {
                    columTemp.push({
                        title: itemKey,
                        dataIndex: itemKey,
                        key: itemKey,
                    });
                }
            });
        }

        setColumn(columTemp)
    }, [dataContent])
    const handelGetList = () => {
      setReset(!reset);
    };
    console.log(dataContent)
    return (
      <div>
        <TemplateTable
          setData={setDataContent}
          dataTable={dataContent}
          columnTable={column}
          deleteFunc={deleteContent}
          createFunc={createContent}
          handelGetList={handelGetList}
          changeFunc={changeContent}
          formEdit={
            <Fragment>
              <Form.Item
                label='Content'
                name='content'
                rules={[{ required: true, message: 'Please input your Content!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Show content"
                name="hidden"
                rules={[{ required: true, message: 'Please select the Show content!' }]}
                >
                <Select>
                    <Option value="Hiển thị">Hiển thị</Option>
                    <Option value="Ẩn">Ẩn</Option>
                </Select>
                </Form.Item>
            </Fragment>
          }
        />
      </div>
    );
  };


export default ContentManagement