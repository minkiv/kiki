import Color from '../Model/Color.js'

export const addColor = async (req) => {
    const color = await Color.create(req.body)
    return color
}

export const getAllColor = async () => {
    const getAll = await Color.find()
    return getAll
}
export const getOneColor = async (req) => {
    const getOne = await Color.findById(req.params.id)
    return getOne
}
export const deleteColor = async (req) => {
    const remove = await Color.findByIdAndDelete(req.params.id)
    return remove
}
export const updateColor = async (req) => {
    const id = req.params.id
    const update = await Color.findByIdAndUpdate(id, req.body, { new: true })
    return update
}