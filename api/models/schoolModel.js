import mongoose from "mongoose";

const Schema = mongoose.Schema

const ObjectId = mongoose.Types.ObjectId

const schoolSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  numberOfProfiles: {
    type: Number
  }
}, {timestamps: true})

const School = mongoose.model('School', schoolSchema)

export default School