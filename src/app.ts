// const express = require('express')
import express, { Request, Response } from 'express'
import connectToDB from './config/db'
const app = express()

const userRoutes = require('./routes/userRoutes')
import router from './routes/userRoutes'
require('dotenv').config()

const PORT = process.env.PORT || 3000

// Connect to Database
connectToDB()

//Init middleware
app.use(express.json())

app.get('/', (_: Request, res: Response) => res.send('Express server started'))

// User router
app.use('/api/users', router)

// Start server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
)
