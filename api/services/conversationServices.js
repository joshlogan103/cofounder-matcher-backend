import Conversation from "../models/conversationModel.js"

// Function to create a new conversation when a message is sent for the first time between two users

export const createConversationFromMessage = async (message) => {
  try {
    const conversationData = {
      users: [message.senderId, message.receiverId],
      messages: [message._id]
    }

    const newConversation = await Conversation.create(conversationData)

    if (!newConversation) {
      console.log('A new conversation could not be created')
    }

    console.log(newConversation)

  } catch (error) {
    console.log(error)
  }
}

// Function to update an existing conversation when a message is sent for a subsequent time

export const updateConversationFromMessage = async (message, conversationId) => {
  try {
    const conversationToUpdate = await Conversation.findById(conversationId)

    if (!conversationToUpdate) {
      console.log('No conversations found to update')
    }

    conversationToUpdate.messages.push(message._id)

    const updatedConversation = await conversationToUpdate.save()

    if (!updatedConversation) {
      console.log('Failed to update the conversation')
    }

    console.log(updatedConversation)

  } catch (error) {
    console.log(error)
  }
}