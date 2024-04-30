import mongoose from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
    minlength: [5, 'Username must include a minimum of 6 characters'],
    maxlength: [30, 'Usename must contain a maximum of 30 characters'],
    match: [/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores']
  },
  password: {
    type: String,
    required: true
  }
},{timestamps: true})

const User = mongoose.model('User', userSchema)

export default User