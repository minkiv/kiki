import { css } from '@emotion/react';
import { FunctionComponent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ThankCustomersProps {}

const ThankCustomers: FunctionComponent<ThankCustomersProps> = () => {
    const [countdown, setCountdown] = useState(10);
    const navigate = useNavigate()

    useEffect(() => {
      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => {
          if (prevCountdown === 0) {
            clearInterval(countdownInterval);
            navigate("/")
            return prevCountdown;
          } else {
            return prevCountdown - 1;
          }
        });
      }, 1000);
    
      return () => clearInterval(countdownInterval);
    }, []);
    console.log(countdown)
  return (
    <div css={cssmain} className='container mx-auto px-4 mt-5'>
      <div className='grid'>
        <div className='thankyou'>
            <img  src='https://video-public.canva.com/VADn8cjyIzc/videos/f772cf2eb6.gif' alt='' />
        </div>
        <h3 className='name'>
          <b>IVY</b>moda
        </h3>
        <div className='flex justify-between'>
            <div>
            <img className='ml-5 w-20 h-50 max-sm:hidden max-xl:block' src='https://media-public.canva.com/S6_4E/MAEW7yS6_4E/1/tl.png' alt='' />
            </div>
            <div className='flex-1'>
            <div className='desc text-center max-sm:w-full w-2/4'>
  Cảm ơn bạn đã tin tưởng và lựa chọn sản phẩm của <b>IVY</b>moda. Mong rằng bạn đã có 1 trải nghiệm mua sắm hài lòng tại <b>IVY</b>moda. Rất vui khi được phục vụ bạn và mong rằng sẽ được tiếp tục đồng hành cùng bạn.
  <br />
  <p className='thank'>Xin Chân Thành Cảm Ơn Quý Khách!</p>
</div>
            </div>
            <div>
            <img className='mt-5 w-20 h-50 max-sm:hidden max-xl:block' src='https://media-public.canva.com/S6_4E/MAEW7yS6_4E/1/tl.png' alt='' />
            </div>
            </div>
      </div>
      <div className='flex justify-center items-center'>
            Sẽ quay về trang chủ trong {countdown}s nữa
    </div>
    <div className='flex justify-center items-center mt-5'>
         <Link to={"/manage"}>
         <button className='btn border-solid rounded-lg p-3 border-red-700 text-red-700 border-2'>
            Xem thông tin sản phẩm
          </button>
         </Link>
      </div>
      <div className='flex justify-center items-center mt-5'>
         <Link to={"/products"}>
         <button className='btn border-solid rounded-lg p-3 border-red-700 text-red-700 border-2'>
            Xem thêm sản phẩm
          </button>
         </Link>
      </div>
    </div>
  );
};

export default ThankCustomers;

const cssmain = css`
  width: 100%;
  .thankyou {
    width: 130px;
    margin: 0 auto;
  }
  .name {
    text-align: center;
    font-size: 30px;
    padding-top: 10px;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .desc {
    margin: 0 auto;
    padding: 20px;
    font-size: 20px;
    color: red;
  }
  .thank {
    text-align: center;
    padding-top: 8px;
  }
  .btn {
    font-size: 15px;
  }
`;