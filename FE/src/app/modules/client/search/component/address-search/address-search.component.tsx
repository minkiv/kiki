import React, { FunctionComponent } from 'react'
import { css } from '@emotion/react'

type Props = {}

const AddressSearch: FunctionComponent<Props> = () => {
  let keyword = new URLSearchParams(location.search).get('q');


  return (
    <div css={cssAddress}>
      <ul className="flex pb-2" >
        <li className="inline pr-4"><a href="">Trang chủ<span className="ml-2">&#8250;</span></a></li>
        <li className="inline pr-4"><a href="">Kết quả tìm kiếm "{keyword}"</a></li>
      </ul>
    </div>


  )
}

export default AddressSearch

const cssAddress = css`
padding-top: 16px;
padding-bottom: 16px;
a{
  color:#848990;
  font-size: 14px;
  opacity: 0.7;
}
a:hover {
  text-decoration: underline;
}
@media (min-width: 0) and (max-width:739px){
  padding-left:7.5px;
}
`
