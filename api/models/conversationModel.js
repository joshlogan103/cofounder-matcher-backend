import mongoose from "mongoose";

const Schema = mongoose.Schema

const ObjectId = mongoose.Types.ObjectId

const conversationSchema = new Schema({
  users: {
    type: [{
      type: ObjectId,
      ref: 'User',
      required: 'true'
    }]
  },
  messages: {
    type: [{
      type: ObjectId,
      ref: 'Message',
      required: true
    }]
  }
}, {timestamps: true})

const Conversation = mongoose.model('Conversation', conversationSchema)

export default Conversation

