import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getOneUserSystem } from '~/app/api/auth/auth.api'
import { UserOutlined, GoldOutlined, PhoneOutlined } from '@ant-design/icons'

interface MenuSideBarProps {
  props?: any
}

const MenuSideBar: FunctionComponent<MenuSideBarProps> = () => {
  const [user, setUser] = useState<any>()
  const id = localStorage.getItem('userID')
  useEffect(() => {
    getOneUserSystem(id).then((res: any) => {
      setUser(res.data)
    })
  }, [id])
  return (
    <div css={cssMenuSideBar} className='w-[200px]'>
      <div className='flex items-center pb-6'>
        <div>
          <img
            src='https://banner2.cleanpng.com/20180517/uzq/kisspng-computer-icons-user-profile-male-avatar-5afd8d7b2682b3.7338522715265662671577.jpg'
            alt=''
            className='w-[50px]'
          />
        </div>
        <div>
          <p className='font-semibold text-[15px] px-4'>{user?.fullname}</p>
        </div>
      </div>

      <div className='user-info'>
        <ul>
          <li>
            <Link to={'/manage-info'}>
              <a href='#'>
                <UserOutlined /> <p>Thông tin tài khoản</p>
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/manage'}>
              <a href='#'>
                {' '}
                <GoldOutlined />
                <p> Quản lý đơn hàng</p>
              </a>
            </Link>
          </li>
          <li>
            <Link to={'/support'}>
              <a href='#'>
                {' '}
                <PhoneOutlined />
                <p>Hỗ trợ</p>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default MenuSideBar

const cssMenuSideBar = css`
  li {
    padding: 10px 0px;
    align-items: center;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: #808285;
  }
  span {
    font-size: 20px;
    margin-right: 4px;
  }
  .user-info a {
    display: flex;
    gap: 4px;
  }
  .user-info p {
    line-height: 22px;
  }
`
