import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},{timestamps: true})

// Use a pre save method to hash a password when a user is created or edited

userSchema.pre('save', async function (next) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  if(this.isModified('password')) {
    if(!regex.test(this.password)) {
      next(new Error(`Password must contain at least 8 characters, with one upper case letter, one lower case letter, one number, and one symbol`))
    }
    try {
      this.password = await bcrypt.hash(this.password, 8)
      next()
    } catch (error) {
      return error
    }
  }
  next()
})

const User = mongoose.model('User', userSchema)

export default User