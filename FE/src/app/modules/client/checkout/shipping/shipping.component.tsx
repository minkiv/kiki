import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputComponent from '~/app/component/parts/input/input.component';
import { schema } from '../../utils/validateForm';
import { css } from '@emotion/react';
import { AiOutlineLeft } from 'react-icons/ai'
import ButtonSqua from '~/app/component/parts/buttonSqua/ButtonSqua';
import { Link } from 'react-router-dom';
interface ShippingData {
    fullname: string;
    phoneNumber: string;
    city: string;
    district: string;
    commune: string;
    locationDetail: string;
}
interface ShippingProps {
    props?: ShippingData
}
const Shipping: FunctionComponent<ShippingProps> = ({ props }) => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const arrayField = [
        {
            title: "Họ và Tên",
            field: "fullname"

        },
        {
            title: "Điện thoại di động",
            field: "phoneNumber"

        },
        {
            title: "Tỉnh/Thành Phố",
            field: "city"

        },
        {
            title: "Quận/Huyện",
            field: "district"

        },
        {
            title: "Phường/Xã",
            field: "commune"

        },
        {
            title: "Địa Chỉ",
            field: "locationDetail"
        }

    ]
    const [submittedData, setSubmittedData] = useState<any>(null);
    const onSubmit = (data: any) => {
        setSubmittedData(data)
    }
    return (
        <div className='sm:py-20 '>
            <div className="Form">
                <div css={Form}>
                    <h3 className="title sm:mt-[20px] max-sm:flex items-center justify-start"><Link className='sm:hidden pr-40  text-[24px]' to={"/"}><AiOutlineLeft /></Link> Địa chỉ giao hàng</h3>
                    <h5 className="address-list-text max-sm:hidden">Chọn địa chỉ giao hàng có sẵn bên dưới:</h5>
                    <form className="item rounded-md bg-white items-center max-sm:hidden">
                        {submittedData && (
                            <>
                                <div className='fullname'>
                                    <p>{submittedData.fullname}</p>
                                </div>
                                <div className='address'>
                                    <p>
                                        Địa chỉ: {`${submittedData.city}, ${submittedData.district}, ${submittedData.commune}, ${submittedData.locationDetail}`}
                                    </p>
                                </div>
                                <div className='numberPhone'>
                                    <p>Điện Thoại: {submittedData.phoneNumber}</p>
                                </div>
                                <span className="default">Mặc định</span>
                                <div className="sm:flex">
                                    <ButtonSqua className='bt' outline children='Giao đến địa chỉ này' />
                                    <ButtonSqua children='Sửa' />
                                </div>
                            </>
                        )}
                    </form>
                    <p className='shipping max-sm:hidden'>
                        Bạn muốn giao hàng đến địa chỉ khác?
                        <a href="/checkout/shipping">
                            <span className="text max-sm:hidden">Thêm địa chỉ giao hàng mới</span>
                        </a>
                    </p>
                </div>
            </div>
            <div css={itemForm}>
                <form className='form-item rounded-md bg-white py-6 mt-4 max-sm:px-4' onSubmit={handleSubmit(onSubmit)}>
                    {arrayField?.map((item: any, index: number) => (
                        <div key={index} className='sm:flex sm:px-[250px] items-center sm:my-6 max-sm:my-14'>
                            <div className='sm:w-[200px] max-sm:px-3'>{item.title}</div>
                            <Controller
                                control={control}
                                name={item.field}
                                render={({
                                    field: { onChange, value, ref },
                                    fieldState: { error }
                                }) => {
                                    return (
                                        <div className='w-full h-[34px] mt-5' >
                                            <InputComponent
                                                hideIcon={false}
                                                placeholder={item?.title}
                                                onChange={onChange}
                                                value={value}
                                                ref={ref}
                                                hasErorr={error}
                                            />
                                            {error && <span className='text-red-600 mt-3 mb-3 text-[1.2rem]'>{error.message}</span>}
                                        </div>
                                    )
                                }}
                            />
                        </div>
                    ))}
                    <div className="flex justify-center">
                        <div className="sm:flex sm:w-[500px] m-auto justify-between">
                            <div>
                                <ButtonSqua children='Hủy bỏ' outline className='w-[238px]' />
                            </div>
                            <div>
                                <ButtonSqua className='bt' children='Giao đến địa chỉ này' />
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}
export default Shipping
const itemForm = css`
.form-item{
    border: 1px solid rgb(204, 204, 204);
}
.bt{
    border: 1px solid rgb(2, 159, 209);
    color: rgb(255, 255, 255);
    background: rgb(0, 182, 240); 
}
button {
    padding: 10px 50px;
    border: 1px solid gray;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
    margin-top: 15px;
}
`
const Form = css`
.fullname{
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 5px;
    padding: 10px 15px 10px 10px;  
}
.address{
    font-size: 15px;
    margin-bottom: 5px;
    padding: 10px 15px 10px 10px;  
  }
.numberPhone{
    font-size: 15px;
    margin-bottom: 5px;
    padding: 10px 15px 10px 10px;      
}
.default{
    position: absolute;
    top: 10px;
    right: 15px;
    display: block;
    font-size: 11px;
    color: rgb(0, 153, 0);
   }
.text{
    color: rgb(0, 127, 240);
    cursor: pointer;
}
.title{
    font-size: 15px;
    font-weight: bold;
}
.address-list-text{
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.1;
}
.shipping{
    font-size: 13px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.bt{
    color: rgb(255, 255, 255);
     background: rgb(0, 182, 240);
}
button{
    padding:10px 50px 10px 20px;
    border:1px solid gray;
    margin-top: 15px;
    background: rgb(247, 247, 247);
    border-color: rgb(225, 225, 225);
    color: rgb(51, 51, 51); 
    }
@media (min-width: 0) and (max-width: 739px) {
    .title{
        width:100%;
        color: rgb(255, 255, 255);
        background: rgb(0, 182, 240); 
        position:fixed;
        line-height: 40px;
        text-align:center;
        margin-top: -10px;
       
    }
  
  }
`