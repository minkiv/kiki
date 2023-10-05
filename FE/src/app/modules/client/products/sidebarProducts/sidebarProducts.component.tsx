import { css } from '@emotion/react'
import { FunctionComponent, useEffect, useState } from 'react'
import { SiZenn } from 'react-icons/si'
import { MdInvertColors } from 'react-icons/md'
import { GiPriceTag } from 'react-icons/gi'
import type { MenuProps } from 'antd'
import { Menu, Slider, Switch } from 'antd'
import ButtonSqua from '~/app/component/parts/button/ButtonSqua'
import { useCategoryRedux } from '../../redux/hook/useCategoryReducer'

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
      categorys.map((cate: any, key = 0) =>
        getItem(<div onClick={() => getAllcategory(cate._id)}>{cate.name}</div>, key + 1)
      ),
      'group'
    ),
    getItem(
      'Mức giá',
      'sub4',
      <GiPriceTag />,
      [
        getItem(
          <Slider defaultValue={30} onChange={onChange} min={100000} max={1000000} onAfterChange={onAfterChange} />,
          '9'
        )
      ],
      'group'
    )
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
        style={{ width: 356, fontSize: 18 }}
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
