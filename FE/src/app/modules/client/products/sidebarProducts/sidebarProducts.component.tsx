import { css } from '@emotion/react'
import { FunctionComponent, useState } from 'react'
import { SiZenn } from 'react-icons/si';
import { MdInvertColors } from 'react-icons/md';
import { GiPriceTag } from 'react-icons/gi';
import type { MenuProps } from 'antd';
import { Menu, Slider, Switch } from 'antd';
import ButtonSqua from '~/app/component/parts/button/ButtonSqua';

interface SidebarProductsProps {
    props?: any
}

const onChange = (value: number | [number, number]) => {
    console.log('onChange: ', value);
};

const onAfterChange = (value: number | [number, number]) => {
    console.log('onAfterChange: ', value);
};

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Danh mục', 'sub1', <SiZenn />, [
        getItem('Mùa hè', '1'),
        getItem('Mùa đông', '2'),
    ]),
    getItem('Màu sắc', 'sub2', <MdInvertColors />, [
        getItem(<div className='flex'>
            <button className='btn text-white bg-red-500'></button>
            <button className='btn text-white bg-blue-500 '></button>
            <button className='btn text-white bg-black'></button>
            <button className='btn text-white bg-green-500'></button>
            <button className='btn text-white bg-yellow-500'></button>
        </div>, '3'),

    ]),
    getItem('Size', 'sub3', <SiZenn />, [
        getItem('S', '4'),
        getItem('M', '5'),
        getItem('XL', '6'),
        getItem('XXL', '7'),
        getItem('L', '8'),
    ]),
    getItem('Mức giá', 'sub4', <GiPriceTag />, [
        getItem(<Slider defaultValue={30} onChange={onChange} min={100000} max={1000000} onAfterChange={onAfterChange} />, '9')
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];


const SidebarProducts: FunctionComponent<SidebarProductsProps> = () => {
    const [openKeys, setOpenKeys] = useState(['']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    return (
        <div css={cssSidebarProductsProduct}>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 356, fontSize: 18 }}
                items={items}
            />
            <div className='flex justify-center space-x-20 pt-28'>
                <ButtonSqua css={cssBtnFalse} children={'BỎ LỌC'} outline={true} />
                <ButtonSqua css={cssBtnTrue} children={'LỌC'} outline={true} />
            </div>
        </div>
    )
}

export default SidebarProducts

const cssSidebarProductsProduct = css`
.btn{
    min-width: 30px;
    height: 30px;    
    border-radius:50px;    
    margin: 10px;
    padding:3px;
    outline:none;
}
`
const cssBtnFalse = css`
width: 90px;
padding: 15px;
border-radius:20px 0;
color:black;
background: white;
:hover{
    color: white;
    background: black
}
`

const cssBtnTrue = css`
width: 90px;
padding: 20px;
border-radius:20px 0;
`