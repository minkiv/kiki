import Capacity from '../Model/capacity.js';

export const addCapacity = async (req) => {
    const Capacitys = await Capacity.create(req.body)
    return Capacitys
}

export const getAllCapacity = async () => {
    const getAll = await Capacity.find()
    return getAll
}

export const getOneCapacity = async (req) => {
    const getOne = await Capacity.findById(req.params.id)
    return getOne
}

export const deleteCapacity = async (req) => {
    const remove = await Capacity.findByIdAndDelete(req.params.id)
    return remove
}

export const updateCapacity = async (req) => {
    const id = req.params.id
    const update = await Capacity.findByIdAndUpdate(id, req.body, { new: true })
    return update
}