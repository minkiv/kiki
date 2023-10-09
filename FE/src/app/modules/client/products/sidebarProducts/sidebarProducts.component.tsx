import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { SiZenn } from 'react-icons/si'
import { MdOutlineAutorenew, MdOutlineWidgets } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import { ImStarEmpty } from 'react-icons/im'
import { GrFormFilter } from 'react-icons/gr'
import type { MenuProps } from 'antd'
import { Menu, Slider, Switch } from 'antd'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
import { useCategoryRedux } from '../../redux/hook/useCategoryReducer'
import { IoIosHeartEmpty } from 'react-icons/io'
import { LiaSortAmountDownSolid, LiaSortAmountUpSolid } from 'react-icons/lia'

interface SidebarProductsProps {
  props?: any
  data: any
  onDataUpdate: any
}

const onChange = (value: number | [number, number]) => {
  console.log('onChange: ', value)
}

const onAfterChange = (value: number | [number, number]) => {
  console.log('onAfterChange: ', value)
}

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type
  } as MenuItem
}

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4']

const SidebarProducts: FunctionComponent<SidebarProductsProps> = (props) => {
  const { data, onDataUpdate } = props
  const {
    data: { categorys },
    actions
  } = useCategoryRedux()
  useEffect(() => {
    actions.getAllcategory()
  }, [data])
  const getAllcategory = (id: any) => {
    onDataUpdate(id)
  }
  const items: MenuItem[] = [
    getItem(
      'Danh Mục',
      'sub1',
      <SiZenn />,
      [
        ...categorys.map((cate: any, key = 0) =>
          getItem(
            <div key={key + 1} onClick={() => getAllcategory(cate._id)}>
              {cate.name}
            </div>,
            `${key + 1}`
          )
        ),
        getItem(<div onClick={() => getAllcategory('all')}>Tất cả</div>, 10, <MdOutlineWidgets />)
      ],
      'group'
    ),
    getItem(
      'Mức giá',
      'sub4',
      <GiPriceTag />,
      [
        getItem(<div className='sideBar-price'>Dưới 60.000 đ</div>, 'price1'),
        getItem(<div className='sideBar-price'>60.000đ -{`>`} 160.000đ</div>, 'price2'),
        getItem(<div className='sideBar-price'>160.000đ -{`>`} 380.000đ</div>, 'price3'),
        getItem(<div className='sideBar-price'>Trên 380.000 đ</div>, 'price4')
      ],
      'group'
    ),
    getItem('Sắp xếp theo', 'sub5', <GrFormFilter />, [
      getItem(<div className='sideBar-sort'>Mặc định</div>, 'sort1'),
      getItem(<div className='sideBar-sort'>Mới nhất</div>, 'sort2', <MdOutlineAutorenew />),
      getItem(<div className='sideBar-sort'>Được mua nhiều nhất</div>, 'sort3', <ImStarEmpty />),
      getItem(<div className='sideBar-sort'>Được yêu thích nhất</div>, 'sort4', <IoIosHeartEmpty />),
      getItem(<div className='sideBar-sort'>Giá cao đến thấp</div>, 'sort5', <LiaSortAmountDownSolid />),
      getItem(<div className='sideBar-sort'>Giá thấp đến cao</div>, 'sort6', <LiaSortAmountUpSolid />)
    ])
  ]
  const [openKeys, setOpenKeys] = useState([''])

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys)
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
    }
  }
  return (
    <div css={cssSidebarProductsProduct}>
      <Menu
        mode='inline'
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{ width: 300, fontSize: 18, paddingRight: 20, marginRight: 20 }}
        items={items}
      />
    </div>
  )
}

export default SidebarProducts

const cssSidebarProductsProduct = css`
  .btn {
    min-width: 30px;
    height: 30px;
    border-radius: 50px;
    margin: 10px;
    padding: 3px;
    outline: none;
  }
  .ant-menu-item-group-title,
  .ant-menu-submenu-title {
    font-size: 18px;
    color: #000;
    background-color: rgba(0, 0, 0, 0.06);
    border-radius: 12px;
  }
  .ant-menu-item {
    font-size: 17px;
  }
  .ant-menu-item:hover,
  .ant-menu-item-selected {
    background-color: #ffaa00 !important;
    color: #fff !important;
  }
  .ant-menu-inline {
    background: none !important;
  }
`
const cssBtnFalse = css`
  width: 90px;
  padding: 15px;
  border-radius: 20px 0;
  color: black;
  background: white;
  :hover {
    color: white;
    background: black;
  }
`

const cssBtnTrue = css`
  width: 90px;
  padding: 20px;
  border-radius: 20px 0;
`
