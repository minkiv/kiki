import React, { FunctionComponent, useState } from 'react'
import { css } from '@emotion/react'
import { BiFilterAlt } from 'react-icons/bi'
import { BsChevronDown } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'

type Props = {}

const FilterProductSearch: FunctionComponent<Props> = (props: Props) => {
    const [listOption, setListOption] = useState(false)
    return (
        <div css={cssFilter} className=''>
            <div className="rows">
                <div className="list-filter flex">
                    <div>
                        <p className='title'>Cam sau</p>
                        <button className='btn-option'>Từ 11MP đến 13MP</button>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <p className='title'>Cam trước</p>
                        <div className='space-x-2'>
                            <button className='btn-option'>Từ 8MP đến 12MP</button>
                            <button className='btn-option'>Dưới 8MB</button>
                            <button className='btn-option'>Từ 5MP đến 8MP</button>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div>
                        <p className='title'>ROM</p>
                        <button className='btn-option'>256GB</button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='divider'></div>
                    <div className="btn-all"><BiFilterAlt /> Tất cả</div>
                </div>
            </div>
            <div className="rows">
                <div className="left flex">
                    <div className='flex items-center checkboxGroup'>
                        <input type="checkbox" className='checkbox' />
                        <img className='img-now' src="https://salt.tikicdn.com/ts/tka/a8/31/b6/802e2c99dcce64c67aa2648edb15dd25.png" alt="" />
                        <span>Giao siêu tốc 2H</span>
                    </div>
                    <div className='divider2'></div>


                    <div className='flex items-center checkboxGroup'>
                        <input type="checkbox" className='checkbox' />
                        <div className='flex img-now '>
                            <AiFillStar className='text-yellow-400' />
                            <AiFillStar className='text-yellow-400' />
                            <AiFillStar className='text-yellow-400' />
                            <AiFillStar className='text-yellow-400' />
                            <AiFillStar className='text-gray-400' />


                        </div>
                        <span>từ 4 sao</span>
                    </div>
                </div>
                <div className="right flex items-center">
                    <div className='title2'>Sắp xếp</div>
                    <button className='selectbox' onClick={() => setListOption(!listOption)}>
                        <div className='mr-2'>Phổ biến</div>
                        <div><BsChevronDown /></div>
                        {listOption && <ul className='listSortProduct z-20 shadow-md rounded-lg absolute top-[102%] w-[200%] bg-white right-0'>
                            <li> Phổ biến</li>
                            <div className='divider3'></div>
                            <li> Bán chạy</li>
                            <div className='divider3'></div>
                            <li> Hàng mới</li>
                            <div className='divider3'></div>
                            <li> Giá thấp đến cao</li>
                            <div className='divider3'></div>
                            <li> Giá cao đến thấp</li>
                        </ul>}
                        {listOption && <div
                            css={cssDarkScreen}
                            onClick={() => setListOption(false)}
                        >
                        </div>}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default FilterProductSearch

const cssFilter = css`
background-color: white;
border-radius: 8px;
margin-top: 8px;
margin-bottom: 8px;
padding: 0px 16px;
.rows{
    display: flex;
    justify-content:space-between;
    padding: 12px 0px;
    border-bottom: 1px solid rgb(235, 235, 240);
}
.title{
    color: rgb(128, 128, 137);
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 4px;
}
.btn-option{
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    padding: 6px 12px;
    border-radius: 16px;
    border: 1px solid rgb(221, 221, 227);
    background-color: white;
}
.divider{
    margin-left: 16px;
    margin-right: 16px;
    align-self: flex-end;
    width: 1px;
    height: 34px;
    background-color: rgb(235, 235, 240);
}
.divider2{
    margin-left: 16px;
    margin-right: 16px;
    align-self: flex-end;
    width: 1px;
    height: 24px;
    background-color: rgb(235, 235, 240);
}
.btn-all{
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    color: rgb(39, 39, 42);
    padding: 6px 12px;
    align-self: flex-end;
    border: 1px solid rgb(221, 221, 227);
    border-radius: 4px;
    gap: 8px;
}
.checkbox{
    width: 21px;
    height: 21px;
    margin:0px;
    font-size: 14px;
    margin-right: 8px;
}
.img-now{
    width: auto;
    margin-right: 8px;
    height: 17px;
}
.title2{
    font-size: 14px;
    line-height: 20px;
    color: rgb(128, 128, 137);
    margin-right: 8px
}
.selectbox{
    display:flex;
    position:relative;
    align-items: center;
    text-align:left;
    background-color: white;
    border: 1px solid rgb(221, 221, 227);
    border-radius: 20px;
    padding: 6px 6px 6px 16px;
    font-size: 14px;
    line-height: 20px;
    color: rgb(39, 39, 42);
    cursor: pointer;
}

.listSortProduct li{
    padding: 8px 16px;
    font-size: 14px;
    line-height: 20px;
    color: rgb(39, 39, 42);
    
}
.listSortProduct li:hover{
    background-color: var(--color-gray-200);
}
.divider3{
    height: 1px;
    width: 160px;
    background-color: rgb(235, 235, 240);
    margin:auto;
}
@media (min-width: 0) and (max-width:739px){
    display:flex;
    justify-content:space-between;
    .list-filter{
        display:none;
    }
    .divider{
        display:none;
    }
    .divider2{
        display:none;
    }
    .checkbox{
        display:none;
    }
    .img-now{
        display:none;
    }
    .title2{
        display:none;
    }
    .checkboxGroup span{
        display:none;
    }
}
`
const cssDarkScreen = css`
opacity:0;
  position: fixed;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: gray;
`  
