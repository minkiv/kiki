import React, { FunctionComponent } from 'react'
import { css } from '@emotion/react'
interface Description{
    props?: any
}
const Description: FunctionComponent<Description> = () => {
  return (
    <div className='bg-slate-50 p-5'>
    <h2 className='text-3xl pb-5'>Mô tả sản phẩm</h2>
    <div className='px-3' css={cssdescription}>
        <p>
        Hiểu Về Trái Tim – Cuốn Sách Mở Cửa Thề Giới Cảm Xúc Của Mỗi Người
        <br />
        Xuất bản lần đầu tiên vào năm 2011, Hiểu Về Trái Tim trình làng cũng lúc với kỷ lục: cuốn sách có số lượng in lần đầu lớn nhất: 100.000 bản. Trung tâm sách kỷ lục Việt Nam công nhận kỳ tích ấy nhưng đến nay, con số phát hành của Hiểu về trái tim vẫn chưa có dấu hiệu chậm lại.
        <br />
        Là tác phẩm đầu tay của nhà sư Minh Niệm, người sáng lập dòng thiền hiểu biết (Understanding Meditation), kết hợp giữa tư tưởng Phật giáo Đại thừa và Thiền nguyên thủy Vipassana, nhưng Hiểu Về Trái Tim không phải tác phẩm thuyết giáo về Phật pháp. Cuốn sách rất “đời” với những ưu tư của một người tu nhìn về cõi thế. Ở đó, có hạnh phúc, có đau khổ, có tình yêu, có cô đơn, có tuyệt vọng, có lười biếng, có yếu đuối, có buông xả… Nhưng, tất cả những hỉ nộ ái ố ấy đều được khoác lên tấm áo mới, một tấm áo tinh khiết và xuyên suốt, khiến người đọc khi nhìn vào, đều thấy mọi sự như nhẹ nhàng hơn...
        <br />
        Sinh tại Châu Thành, Tiền Giang, xuất gia tại Phật Học Viện Huệ Nghiêm – Sài Gòn, Minh Niệm từng thọ giáo thiền sư Thích Nhất Hạnh tại Pháp và thiền sư Tejaniya tại Mỹ. Kết quả sau quá trình tu tập, lĩnh hội kiến thức… Ông quyết định chọn con đường hướng dẫn thiền và khai triển tâm lý trị liệu cho giới trẻ làm Phật sự của mình. Tiếp cận với nhiều người trẻ, lắng nghe thế giới quan của họ và quan sát những đổi thay trong đời sống hiện đại, ông phát hiện có rất nhiều vấn đề của cuộc sống. Nhưng, tất cả, chỉ xuất phát từ một nguyên nhân: Chúng ta chưa hiểu, và chưa hiểu đúng về trái tim mình là chưa cơ chế vận động của những hỉ, nộ, ái, ố trong mỗi con người. “Tôi đã từng quyết lòng ra đi tìm hạnh phúc chân thật. Dù thời điểm ấy, ý niệm về hạnh phúc chân thật trong tôi rất mơ hồ nhưng tôi vẫn tin rằng nó có thật và luôn hiện hữu trong thực tại. Hơn mười năm sau, tôi mới thấy con đường. Và cũng chừng ấy năm nữa, tôi mới tự tin đặt bút viết về những điều mình đã khám phá và trải nghiệm…”, tác giả chia sẻ.<span id="dots">...</span><span id='more'>Lúc sinh thời cố Giáo sư, Tiến sĩ Trần Văn Khuê, có dịp tiếp cận với Hiểu Về Trái Tim. Ông nhận xét, như một cuốn sách đầu tiên thuộc chủ đề Hạt Giống Tâm Hồn do một tác giả Việt Nam viết, cuốn sách sẽ giúp người đọc hiểu được cảm xúc của tâm hồn, trái tim của chính mình và của người khác. Để, tận cùng là loại bỏ nỗi buồn, tổn thương và tìm được hạnh phúc trong cuộc sống. Có lẽ, vì điều này mà gần 10 năm qua, Hiểu về trái tim vẫn là cuốn sách liên tục được tái bản và chưa có dấu hiệu “hạ nhiệt”. Đáng quý hơn, tòan bộ lợi nhuận thu được từ việc phát hành cuốn sách này đều được chuyển về quỹ từ thiện cùng tên để giúp đỡ trẻ em có hoàn cảnh khó khăn, bất hạnh tại Việt Nam.
        <br />
        Giá sản phẩm trên Tiki đã bao gồm thuế theo luật hiện hành. Bên cạnh đó, tuỳ vào loại sản phẩm, hình thức và địa chỉ giao hàng mà có thể phát sinh thêm chi phí khác như phí vận chuyển, phụ phí hàng cồng kềnh, thuế nhập khẩu (đối với đơn hàng giao từ nước ngoài có giá trị trên 1 triệu đồng).....</span>
        </p>

   <div className='flex justify-center'>
   <button className='border-teal-300 border w-72 p-4 rounded-lg mt-10 text-cyan-300' onClick={()=>myFunction()} id="myBtn">Xem thêm nội dung</button>
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

