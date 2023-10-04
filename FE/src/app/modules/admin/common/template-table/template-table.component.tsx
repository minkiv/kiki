import React, { FC, useEffect, useState } from 'react';
import { Button, Input, Popconfirm, Space, Table, Tag, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import TemplateModal from '../template-modal/template-modal.component';
import LayoutLoading from '~/app/component/stack/layout-loadding/layout-loadding.component';
import { SearchOutlined } from '@ant-design/icons';

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

interface ITemplateTableProp {
    dataTable: any[],
    createFunc?: any,
    deleteFunc?: any
    changeFunc?: any
    searchFunc?: any
}

const TemplateTable: FC<ITemplateTableProp> = ({dataTable,createFunc,deleteFunc,searchFunc,changeFunc}) => {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [triggerLoadding, setTriggerLoadding] =useState(false)
    const [type, setType] = useState('CREATE')
    const [columTable, setColumTable] = useState<any[]>([])
    const confirmDelete = (e: any) => {
        setTriggerLoadding(true)
        deleteFunc(type).then((res: any)=>{
            if(res){
                setTimeout(()=> {
                    setTriggerLoadding(false)
                }, 1000)
            } 
        },(err: any) =>{
            setTimeout(()=> {
                setTriggerLoadding(false)
            }, 1000)      
        })
        message.success('Xóa thành công');
    };
    const cancel = (e: any) => {
        message.error('Đã hủy');
    };
    const handleOk = () => {
        setIsModelOpen(false)
        setTriggerLoadding(true)
        if(type=='CREATE'){
            createFunc(type).then((res:any)=>{
                if(res){
                    setTimeout(()=> {
                        setTriggerLoadding(false)
                    }, 1000)
                }
            },(err:any)=>{
                setTimeout(()=> {
                    setTriggerLoadding(false)
                }, 1000)
            })
        }
        if(type=='CHANGE'){
            changeFunc(type, type).then((res:any)=>{
                if(res){
                    setTimeout(()=> {
                        setTriggerLoadding(false)
                    }, 1000)
                }
            },(err:any)=>{
                setTimeout(()=> {
                    setTriggerLoadding(false)
                }, 1000)
            })
        }
    }
    const handleSearchItem = () => {
        setTriggerLoadding(true)
        searchFunc(type).then((res:any)=>{
            if(res){
                setTimeout(()=>{
                    setTriggerLoadding(false)
                },1000)
            }
        }, (err:any)=>{
            setTimeout(() => {
                setTriggerLoadding(false)
            }, 1000)
        })
    }
    const handleCancel = () => {
        setIsModelOpen(false)
    }
    const showModel = (typeAction: any) => {
        setIsModelOpen(true)
        setType(typeAction)
    }
    const columns: ColumnsType<DataType> = [

        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type="primary" onClick={()=>showModel('CHANGE')} >
                        Edit
                    </Button>
                    <Popconfirm
                        title="Thông báo"
                        description="Bạn có chắc muốn xóa không?"
                        onConfirm={confirmDelete}
                        onCancel={cancel}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button danger>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        const columTemp: any[] = []
        if(dataTable.length > 0){
            Object?.keys(dataTable[0]).map((itemKey) => 
                columTemp.push({
                    title: itemKey,
                    dataIndex: itemKey,
                    key: itemKey
                })
            )
        }
        const merArray = [...columTemp, ...columns]
        setColumTable(merArray)
    }, [dataTable])

    return (
        <LayoutLoading condition={triggerLoadding}>
          <div className=''>
             <div className='flex pb-4 justify-between'>
                 <Button type="primary" onClick={()=>showModel('CREATE')}>
                     Create
                 </Button>
                 <div>
                     <Input placeholder='search item here' className='w-[350px]' prefix={<SearchOutlined />}/>
                     <Button type='primary' className='ml-3'  onClick={handleSearchItem}>Search</Button>
                 </div>
             </div>
             <div className='overflow-auto'>
                 <Table columns={columTable} dataSource={dataTable} />
             </div>
             <div>
                 <TemplateModal isModelOpen={isModelOpen} handleOk={handleOk} handleCancel={handleCancel} />
             </div>
         </div>
 
        </LayoutLoading>
     )

}

export default TemplateTable;