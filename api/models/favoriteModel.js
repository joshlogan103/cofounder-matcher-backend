import mongoose from "mongoose";

const Schema = mongoose.Schema

const ObjectId = mongoose.Types.ObjectId

const favoriteSchema = new Schema({
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  favoritedProfile: {
    type: ObjectId,
    ref: 'Profile',
    required: true
  }
}, {timestamps: true})

const Favorite = mongoose.model('Favorite', favoriteSchema)

export default Favorite