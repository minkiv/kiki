import { css } from '@emotion/react'
import React, { FunctionComponent } from 'react'

interface SubHeaderProps {
    props?: any
}

const SubHeader: FunctionComponent<SubHeaderProps> = () => {
    return (
        <div css={cssSubHeader}>
            <div className='left-sub'>
                <div className='item-left'>Trái cây</div>
                <div className='item-left'>Trái cây</div>
                <div className='item-left'>Trái cây</div>
                <div className='item-left'>Trái cây</div>
                <div className='item-left'>Trái cây</div>
            </div>
            <div className='right flex items-center'>
                <img
                    src='https://salt.tikicdn.com/ts/upload/88/5c/9d/f5ee506836792eb7775e527ef8350a44.png'
                    alt=''
                    className='w-[20px] mr-1'
                />
                <div className='title'>
                    Giao đến: <strong className='underline'>Q. Bắc Từ Liêm, P. Minh Khai, Hà Nội</strong>
                </div>
            </div>
        </div>
    )
}

export default SubHeader

const cssSubHeader = css`
  display: flex;
  padding: 10px 0;
  justify-content: space-between;

  .left-sub {
    display: flex;

    .item-left {
      margin-right: 8px;
      color: var(--color-gray-200);
    }
  }
`