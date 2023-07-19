import Color from '../Model/Color.js'

export const addColor = async (req, res) => {
    const color = await Color.create(req.body)
    return color
}