
import status from 'http-status'
import catchAsync from "../../../../utils/catchAsync.js";
import { deleteUsers } from '../../service/Auth.js';

const deleteUser = catchAsync(async (req, res) => {
    const remove = await deleteUsers(req)
    return res.status(status.OK).json(remove)
})
export default deleteUser