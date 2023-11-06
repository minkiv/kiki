import { css } from "@emotion/react";
import { Button, Modal, Rate } from "antd"
import { FunctionComponent, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import { createComment } from "~/app/api/comment/comment.api";
import ButtonComponent from "~/app/component/parts/button/Button.componet"
import ButtonSqua from "~/app/component/parts/button/ButtonSqua";
import { useCommentRedux } from "~/app/modules/client/redux/hook/useCommentReducer";
import { useProductRedux } from "~/app/modules/client/redux/hook/useProductReducer";

interface DetailInformation { }
const CommentEvaluateComponent: FunctionComponent<DetailInformation> = () => {
    const {
        data: { product: productDetail }
    } = useProductRedux()

    let { id } = useParams()
    const [commentText, setCommentText] = useState('')
    const { actions } = useCommentRedux()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState(5);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const handleTextAreaChange = (event: any) => {
        setCommentText(event.target.value)
    }
    const userId = localStorage.getItem("userID")
    const handelSubmitComment = () => {
        createComment({ comment: commentText, productId: id, star: value, userId }).then((res) => {
            if (res) {
                toast.success("Đánh giá và bình luận thành công")
                setIsModalOpen(false);
                actions.getAllComments(id)
            }
        }, (err) => {
            toast.error('Vui lòng đánh giá sản phẩm!')
        })
    }
    return (
        <div css={CommentCss}>
            <hr className='mt-20' />
            <div className='flex justify-between items-center my-7 mt-5'>
                <div className="flex items-center">
                    <h2 className='text-[22px] font-semibold'>Tất cả đánh giá</h2>
                    <div className='px-8'>
                        <select name="" id="" className='btn focus:outline-none border border-black text-center '>
                            <option value="0">Tìm tất cả</option>
                            <option className="mt-[10px]" value="1">5 Sao</option>
                            <option value="2" className="mb-2">4 Sao</option>
                            <option value="3">3 Sao</option>
                            <option value="4">2 Sao</option>
                            <option value="5">1 Sao</option>
                        </select>
                    </div>
                </div>

                <div className='flex items-center'>

                    <div>
                        <h2 className='text-[22px] font-semibold mb-6 text-center'>
                            Bình luận, đánh giá suy nghĩ của bạn
                        </h2>

                        <ButtonSqua className="btn float-right" children={"Bình luận, đánh giá tại đây"} onClick={showModal} />
                        <div>
                            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1200} bodyStyle={{ height: 500 }} footer={null}>
                                <div className='flex my-5'>
                                    <div>
                                        <img src="https://pubcdn.ivymoda.com/files/product/thumab/1600/2023/11/02/7f9328042d7f27a891a08cf622590c9b.jpg" alt="" className='h-[500px] w-[450px]' />
                                    </div>
                                    <div className='px-4 w-full'>
                                        <h1 className='text-[22px] font-semibold'>{productDetail?.name}</h1>
                                        <p className='text-[14px] text-gray-600 font-semibold py-4'>Thương hiệu: {productDetail?.brand}</p>
                                        <div className='flex justify-between items-center mt-2'>
                                            <div className='text-[16px] text-gray-600 font-semibold'>
                                                Đánh giá *
                                            </div>
                                            <div>
                                                <span>
                                                    <Rate onChange={setValue} value={value} />
                                                </span>
                                            </div>
                                        </div>
                                        <hr />

                                        <h2 className='text-[15px] my-4 font-semibold mt-5'>Bình luận</h2>

                                        <textarea onChange={handleTextAreaChange} placeholder='Bình luận tại đây' className='w-full h-[280px] mt-4 rounded-tl-2xl rounded-br-2xl border border-gray-600 px-2'></textarea>

                                        <div className='flex items-center mt-6 float-right'>
                                            <div>
                                                <ButtonSqua onClick={handelSubmitComment} children={"Submit"} className="rounded-tl-2xl rounded-br-2xl  w-[100px]" />
                                            </div>
                                            <div>
                                                <ButtonComponent onClick={handleCancel} children={"Cancel"} className="w-[100px]" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </div>
                    </div>


                </div>
            </div>
            <hr className='my-5' />
        </div>
    )
}

export default CommentEvaluateComponent

const CommentCss = css`
.btn{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 16px 0;
    padding: 15px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    height: 48px;
  }
`
