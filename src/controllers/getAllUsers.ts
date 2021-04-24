import User from '../models/Users'
import { Request, Response } from 'express'
import IUser from '../interfaces/users'

//@GET
//GetAll users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const allUsers: IUser[] = await User.find()

    res.json({
      status: 'Successful',
      data: allUsers,
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

export default getAllUsers
