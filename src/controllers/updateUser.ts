import User from '../models/Users'
import { Request, Response } from 'express'
import IUser from '../interfaces/users'

//@PUT
//Update one user
const updateUser = async (req: Request, res: Response) => {
  const { name, age, designation } = req.body

  try {
    const user: IUser | null = await User.findById(req.params.id)

    if (!user) return res.json({ status: 'Unsuccessful', message: 'User not found with the specified ID' })

    let userFields = {
      name: user?.name,
      age: user?.age,
      designation: user?.designation
    }

    if (name) userFields.name = name
    if (age) userFields.age = age
    if (designation) userFields.designation = designation

    const updatedUser = await User.updateOne(
      { _id: req.params.id },
      { $set: userFields },
      { new: true }
    )

    res.json({
      status: 'Successful',
      data: {
        updatedUser,
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

export default updateUser
