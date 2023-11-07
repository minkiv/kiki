import Comment_evaluateModel from "../Model/Comment_evaluate.model.js"

export const createComment_avaluates = async (data) => {
    const { userId, productId, comment, star } = data
    const newComment = new Comment_evaluateModel({
        userId: userId,
        productId: productId,
        comment: comment,
        star: star
    })
    await newComment.save()
    return newComment
}


export const getAllComment_evaluates = async () => {
    const comments = await Comment_evaluateModel.find();
    // await Comment_evaluateModel.populate(comments, {path:'user', model:'Auth'});
    // await Comment_evaluateModel.populate(comments, {path:'product', module:'Product'})
    return comments
}

export const updateComment_evaluates = async (req) => {
    const comment = await Comment_evaluateModel.updateOne(
        {
            _id: req.params.id
        },
        {
            ...req.body
        }
    )
    return comment
}

export const getComment_evaluates = async (productId) => {
    const comments = await Comment_evaluateModel.find({ productId: productId })
    await Comment_evaluateModel.populate(comments, { path: 'userId', model: 'Auth' })
    return comments
}

export const deleteComment_evaluates = async (req) => {
    const comment = await Comment_evaluateModel.findByIdAndDelete(req.params.id)
    return comment
}
