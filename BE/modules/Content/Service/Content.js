import Content from "../Model/Content.js"

export const getAllContent = async () => {
    const getAll = await Content.find()
    return getAll
}
export const removeContent = async (req) => {
    const remove = await Content.findByIdAndDelete(req.params.id)
    return remove
}
export const addContent = async (req) => {
    const Contents = await Content.create({
        ...req.Content
    })
    return Contents
}

export const updateContent = async (req) => {
    const id = req.params.id
    const update = await Content.updateOne({
        _id: id
    },
        {
            ...req.body
        }
    )
    return update
}