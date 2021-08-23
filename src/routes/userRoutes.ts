import express from 'express'
import createNewUser from '../controllers/createNewUser'
import getAllUsers from '../controllers/getAllUsers'
import deleteUser from '../controllers/deleteUser'
import getUser from '../controllers/getUser'
import updateUser from '../controllers/updateUser'
const userRouter = express.Router()

userRouter.get('/all', getAllUsers)
userRouter.get('/find/:id', getUser)
userRouter.post('/new', createNewUser)
userRouter.patch('/update/:id', updateUser)
userRouter.delete('/delete/:id', deleteUser)

export = userRouter
