import Color from '../Model/Color.js'

export const addColor = async (req, res) => {
    const color = await Color.create(req.body)
    return color
}

export const getAllColor = async (req, res) => {
    const getAll = await Color.find(req.body)
    return getAll
}
export const getOneColor = async (req, res) => {
    const getOne = await Color.findById(req.params.id)
    return getOne
}
export const deleteColor = async (req, res) => {
    const remove = await Color.findByIdAndDelete(req.params.id)
    return remove
}
export const updateColor = async (req) => {
    const id = req.params.id
    const update = await Color.findByIdAndUpdate(id, req.body)
    return update
}