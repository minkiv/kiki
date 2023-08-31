import { FunctionComponent } from 'react'
import { css } from '@emotion/react'
import { useProductRedux } from '~/app/modules/client/redux/hook/useProductReducer'
interface Description {
  props?: any
}
const Description: FunctionComponent<Description> = () => {
  const {
    data: { product: productDetail }
  } = useProductRedux()
  return (
    <div className='bg-slate-50 p-5'>
      <h2 className='text-3xl pb-5'>Mô tả sản phẩm</h2>
      <div className='px-3' css={cssdescription}>
        <p>
          {productDetail?.description}
        </p>
        <div className='flex justify-center'>
          <button className='border-teal-300 border w-72 p-4 rounded-lg mt-10 text-cyan-300' onClick={() => myFunction()} id="myBtn">Xem thêm nội dung</button>
        </div>
      </div>
    </div>
  )
}
const myFunction = () => {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("myBtn");

  if (dots && moreText && btnText) {
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Xem thêm nội dung";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Thu gọn nội dung";
      moreText.style.display = "inline";
    }
  }
};

export default Description
const cssdescription = css`
#more {
    display: none
}
`

