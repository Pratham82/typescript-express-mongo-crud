import { Document } from 'mongoose'

export default interface IUser extends Document {
  name: string,
  age: number,
  designation: string
}