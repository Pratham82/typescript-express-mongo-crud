import mongoose from 'mongoose'
require('dotenv').config()
const MONGO_URI: string = (process.env.MONGO_URI as string);

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected ✅')
  } catch (err) {
    /* handle error */
    console.error(err.message)
    process.exit(1)
  }
}

export default connectDB
