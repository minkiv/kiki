import { yupResolver } from '@hookform/resolvers/yup';
import { FunctionComponent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputComponent from '~/app/component/parts/input/input.component';
import { schema } from '../../utils/validateForm';
import { css } from '@emotion/react'
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

        <div className='py-20'>

            <div css={Form}>
                <h3 className="title"> Địa chỉ giao hàng</h3>
                <h5 className="address-list-text">Chọn địa chỉ giao hàng có sẵn bên dưới:</h5>
                <form className="item rounded-md bg-white py-24 mt-4 ">
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
                            <div>
                                <button type="submit">giao đến địa chỉ này</button>
                                <button type="button">Sửa</button>
                            </div>
                        </>
                    )}

                </form>
                <p className='shipping'>
                    Bạn muốn giao hàng đến địa chỉ khác?
                    <a href="http://localhost:3000/checkout/shipping">
                        <span className="text">Thêm địa chỉ giao hàng mới</span>
                    </a>

                </p>
            </div>
            <div css={itemForm}>
                <form className='form-item rounded-md bg-white py-6 mt-4' onSubmit={handleSubmit(onSubmit)}>
                    {arrayField?.map((item: any, index: number) => (
                        <div key={index} className='flex px-[250px] items-center my-6'>
                            <div className='w-[200px]'>{item.title}</div>
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
                                                onChange={onChange} // send value to hook form
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
                    <div className="button ">
                        <button className="cancel mt-5">Hủy bỏ</button>
                        <button className="cancel1 mt-5" >Giao đến địa chỉ này</button>
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
.button{
    width: 66.6666%;
    display: flex;
}
.cancel{
    flex: 1 0 40%;
    background: rgb(247, 247, 247);
    border-color: rgb(225, 225, 225);
    outline-color: rgb(204, 204, 204);
    font-size: 13px;
    padding: 10px 0px;
    border-radius: 2px;
    cursor: pointer;
}
.cancel1{
    flex: 1 0 40%;
    background: rgb(247, 247, 247);
    background-color: rgb(255, 255, 255);
    font-size: 13px;
    padding: 10px 0px;
    border-radius: 2px;
    cursor: pointer;
}
`
const Form = css`

.item{
    position: relative;
    flex: 1 0 40%;
    background-color: rgb(255, 255, 255);
    box-shadow: none;
    border-radius: 3px;
    color: rgb(51, 51, 51);
    font-size:13px;
    border: 1px dashed rgb(0, 153, 0);
    max-width: calc(50% - 20px);
    padding: 10px 15px;
}
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
    margin-top: 20px;
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

button[type="submit"] {
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    padding: 6px 14px;
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    outline-color: rgb(204, 204, 204);
    margin-right: 7px;
    border: 1px solid rgb(2, 159, 209);
    color: rgb(255, 255, 255);
    background: rgb(0, 182, 240)
  }
 button[type="submit"]:hover {
        background: rgb(0, 182, 240)
  }
button[type="submit"].cancel {
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    padding: 6px 14px;
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    outline-color: rgb(204, 204, 204);
    margin-right: 7px;
    border: 1px solid rgb(2, 159, 209);
    color: rgb(255, 255, 255);
    background: rgb(0, 182, 240)
  }
 
  button[type="submit"].cancel1 {
    background-color: #00b6f0;
    border: 1px solid #02c3d1;
    color: #fff;
  }
button[type="button"]{
    touch-action: manipulation;
    cursor: pointer;
    user-select: none;
    padding: 6px 14px;
    text-align: center;
    white-space: nowrap;
    border-radius: 2px;
    outline-color: rgb(204, 204, 204);
    margin-right: 7px;
    border: 1px solid rgb(204, 204, 204);
    color: rgb(51, 51, 51);
    background: 
    
}
  
`