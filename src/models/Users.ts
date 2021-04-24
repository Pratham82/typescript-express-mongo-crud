// const mongoose = require('mongoose')
import mongoose, { Model, mongo, Mongoose, Schema } from 'mongoose'
import IUser from '../interfaces/users'

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  }
}, {
  timestamps: true
})

// module.exports = Model('User', userSchema)
export default mongoose.model<IUser>('User', userSchema)
