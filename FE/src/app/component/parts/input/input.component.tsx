import { css } from '@emotion/react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface InputProps {
    prop?: any
    hideIcon?: boolean
    placeholder?: string
    ref?: any
    onChange?: any
    value?: any
    hasErorr?: any
}
type RefType = any
const InputComponent = React.forwardRef<RefType, InputProps>(
    ({ hideIcon = true, placeholder = 'Bạn tìm gì hôm nay', onChange, value, hasErorr }, ref) => {
        return (
            <div css={cssInput(hideIcon, hasErorr)}>
                {hideIcon && (
                    <div className='icon pl-[18px]'>
                        <AiOutlineSearch />
                    </div>
                )}
                <input
                    ref={ref}
                    type='text'
                    className='h-full w-full flex-1 block outline-none mx-2 input'
                    placeholder={placeholder}
                    value={value || ''}
                    onChange={onChange}
                    css={cssInputMain}
                />
                {hideIcon && <button className='button-search'>Tìm kiếm</button>}

            </div>
        )
    }
)

export default InputComponent

const cssInput = (hideIcon: boolean, hasErorr: any) => css`
  display: flex;
  align-items: center;
  flex: 1;
  /* padding: 10px 0; */
  ${hasErorr ? 'border: 1px solid rgb(255, 93, 93);' : 'border: 1px solid rgb(221, 221, 227);'}
  border-radius: 8px;
  min-height: 38px;
  transition: all 0.3s ease;
  &:focus-within {
    border-color: rgb(102, 175, 233);
  }
  .icon {
    font-size: 20px;
    color: var(--color-gray-200);
  }
  .input {
    padding-left: 10px;
    ${hideIcon && 'border-right: 1px solid var(--color-gray-100);'}
  }
  .button-search {
    color: var(--color-blue-primary);
    height: 100%;
    padding: 0 15px;
    width: 92px;
    height: 38px;
    &:hover {
      background-color: var(--color-blue-hover);
    }
  }
`

const cssInputMain = css``