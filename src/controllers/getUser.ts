import User from '../models/Users'
import { Request, Response } from 'express'
import IUser from '../interfaces/users'

//@GET
//Get one user
const getUser = async (req: Request, res: Response) => {
  try {
    const user: IUser | null = await User.findById(req.params.id)
    if (!user) return res.json({ status: 'Unsuccessful', message: 'User not found with the specified ID !!' })

    res.json({
      status: 'Successful',
      data: {
        user,
      },
    })
  } catch (err) {
    /* handle error */
    res.status(400).json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

export default getUser