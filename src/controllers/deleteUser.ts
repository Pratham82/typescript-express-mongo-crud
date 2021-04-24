import User from '../models/Users'
import { Request, Response } from 'express'
import IUser from '../interfaces/users'

//@DELETE
//Delete one user
const deleteUser = async (req: Request, res: Response) => {
  try {

    const user: IUser | null = await User.findById(req.params.id)
    if (user) {
      let deletedUser = await User.deleteOne({ _id: req.params.id })
      res.json({
        status: 'Successful',
        data: 'User successfully deleted!!!',
        deletedUser: user
      })
    }
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

export default deleteUser