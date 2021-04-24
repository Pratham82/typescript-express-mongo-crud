import User from '../models/Users'
import { Request, Response } from 'express'
import IUser from '../interfaces/users'

//@POST
//Create new user
const createNewUser = async (req: Request, res: Response) => {
  try {
    const { name, age, designation } = req.body

    const user: IUser = new User({
      name,
      age,
      designation,
    })

    const newUser: IUser = await user.save()

    res.json({
      status: 'Successful',
      message: 'New user created',
      data: {
        newUser,
      },
    })
  } catch (err) {
    /* handle error */
    res.json({
      status: 'Unsuccessful',
      message: err.message,
    })
  }
}

export default createNewUser
