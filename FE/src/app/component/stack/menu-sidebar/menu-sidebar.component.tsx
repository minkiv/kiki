import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { getOneUserSystem } from '~/app/api/auth/auth.api'

interface MenuSideBarProps {
    props?: any
}

const MenuSideBar: FunctionComponent<MenuSideBarProps> = () => {
    const [user, setUser] = useState<any>();
    const id = localStorage.getItem('userID')
    useEffect(() => {
        getOneUserSystem(id).then((res: any) => {
            setUser(res.data)
        })
    }, [id])
    return (
        <div css={cssMenuSideBar} className='w-[200px]'>
            <div className='flex items-center'>
                <div>
                    <img src="https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg" alt="" className='w-[50px]' />
                </div>
                <div>
                    <p className='font-semibold text-[15px] px-4'>{user?.fullname}</p>
                </div>
            </div>

            <div>
                <ul>
                    <li>
                        <a href="/manage-info">Thông tin tài khoản</a>
                    </li>
                    <li>
                        <a href="/manage">Quản lý đơn hàng</a>
                    </li>
                    <li>
                        <a href="/support">Hỗ trợ</a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default MenuSideBar

const cssMenuSideBar = css`
border-right:1px solid gray;
li{
    padding:10px 0px;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #808285;
}
`