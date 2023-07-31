import { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import MainDetail from './main-detail/main-detail.component'

interface DetailProps{

}

const Detail: FunctionComponent<DetailProps> = () => {
  return (
    <div css={cssDetail}>
      <MainDetail/>
    </div>
  )
}

export default Detail 

const cssDetail = css`
display: flex;
justify-content: space-between;
padding-top: 16px;
width: 1440px;
margin-right: auto;
margin-left: auto;
@media (min-width: 0) and (max-width: 739px) {
    width:100%;
    display: unset;
    width: auto;
  }
`
