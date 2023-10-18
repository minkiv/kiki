import { Fragment, useEffect, useState } from 'react';
import { Form, Select } from 'antd';
import { deleteOrder, getAllOrder, updateOrder } from './service/order.service';
import TemplateTable from '../common/template-table/template-table.component';

const OrderManagement = () => {
  const [columns, setColumns] = useState([]);
  const [dataOrder, setDataOrder] = useState<any>([]);
  const [reset, setReset] = useState<boolean>(true)
  useEffect(() => {
    getAllOrder().then((res) => {
      setDataOrder(res.data);
    });
  }, [reset]);
  console.log(dataOrder)
  useEffect(() => {
    const dataColum: any = [];
    if (dataOrder.length > 0) {
      Object.keys(dataOrder[0]).map((itemkey) => {
        if (
          !['_id', '__v', 'updatedAt', 'productOrder', 'user', 'createdAt'].includes(itemkey)
        ) {
          dataColum.push({
            title: itemkey,
            dataIndex: itemkey,
            key: itemkey,
          });
        }
      });
    };
    if (dataOrder[0]?.productOrder && dataOrder[0]?.productOrder.length > 0) {
      const firstItem = dataOrder[0].productOrder[0].product;
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey) => {
          if (!['_id', 'updatedAt', 'price', 'cost', 'description', 'images', 'brand', 'listQuantityRemain', 'categoryId', 'createdAt', '__v'].includes(itemKey)) {
            dataColum.push({
              title: `${itemKey}`,
              dataIndex: `${itemKey}`,
              key: `${itemKey}`,
              render: (text: any, record: any, index: any) => {
                return (
                  <>
                    {dataOrder[index]?.productOrder?.map((item: any, index: any) => (
                      <p key={index}>
                        {item.product[itemKey]}
                        <hr />
                      </p>
                    ))}
                  </>
                );
              }
            });
          }

        });
      }
    }
    if (dataOrder[0]?.productOrder && dataOrder[0]?.productOrder.length > 0) {
      const firstItem = dataOrder[0].productOrder[0].quantityOrder;
      if (firstItem) {
        Object.keys(firstItem).forEach((itemKey) => {
          if (![''].includes(itemKey)) {
            dataColum.push({
              title: `${itemKey}`,
              dataIndex: `${itemKey}`,
              key: `${itemKey}`,
              render: (text: any, record: any, index: any) => {
                return (
                  <>
                    {dataOrder[index]?.productOrder?.map((item: any, index: any) => (
                      <p key={index}>
                        {item.quantityOrder[itemKey]}
                        <hr />
                      </p>
                    ))}
                  </>
                );
              }
            });
          }

        });
      }
    }
    setColumns(dataColum);
  }, [dataOrder]);

  const handelGetList = () => {
    setReset(!reset)
  }
  return (
    <div>
      <TemplateTable
        dataPage={2}
        dataTable={dataOrder}
        columnTable={columns}
        changeFunc={updateOrder}
        deleteFunc={deleteOrder}
        handelGetList={handelGetList}
        formEdit={
          <Fragment>
            <Form.Item label='orderStatus' name='orderStatus' rules={[{ required: true, message: 'Please input your username!' }]}>
              <Select placeholder='Chuyển đổi trạng thái'>
                <Select.Option value='duyệt thành công'>duyệt thành công</Select.Option>
                <Select.Option value='đang vận chuyển'>đang vận chuyển</Select.Option>
                <Select.Option value='hoàn thành'>hoàn thành</Select.Option>
              </Select>
            </Form.Item>
          </Fragment>
        }
      />
    </div>
  );
};

export default OrderManagement;