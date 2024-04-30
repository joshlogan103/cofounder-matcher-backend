import mongoose from "mongoose";

const Schema = mongoose.Schema

const ObjectId = mongoose.Types.ObjectId

const messageSchema = new Schema({
  senderId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String
  },
  timeSent: {
    type: Date,
    required: true
  }
}, {timestamps: true})

const Message = mongoose.model('Message', messageSchema)

export default Message