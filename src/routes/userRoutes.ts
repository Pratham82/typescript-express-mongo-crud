import express from 'express'
import createNewUser from '../controllers/createNewUser'
import getAllUsers from '../controllers/getAllUsers'
import deleteUser from '../controllers/deleteUser'
import getUser from '../controllers/getUser'
import updateUser from '../controllers/updateUser'
const router = express.Router()

router.get('/all', getAllUsers)
router.get('/find/:id', getUser)
router.post('/new', createNewUser)
router.patch('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export = router