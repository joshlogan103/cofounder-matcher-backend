import Conversation from '../models/conversationModel.js'

// Get all Conversations

export const getAllConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find({})

    if (!conversations) {
      res.status(400).json({
        error: `No conversations found`
      })
    }

    res.json(conversations)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Get one Conversation by ID

export const getConversationById = async (req, res) => {
  try {
    const { id } = req.params

    const conversation = await Conversation.findById(id)

    if (!conversation) {
      res.status(400).json({
        error: `Conversation not found`
      })
    }

    res.json(conversation)

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Create a Conversation

export const createConversation = async (req, res) => {
  try {
    const conversationData = req.body

    if (!conversationData.length === 0) {
      res.status(401).json({
        error: `No Conversation data found`
      })
    }

    const conversationCreated = await Conversation.create(conversationData)

    if (!conversationCreated) {
      res.status(400).json({
        error: `Conversation was not able to be created`
      })
    }

    res.json({
      message: `Conversation ${conversationData.name} was created successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Update a Conversation by ID

export const updateConversationByID = async (req, res) => {
  try {
    const { id } = req.params
    const conversationData = req.body

    const conversationToUpdate = await Conversation.findById(id)

    if (!conversationToUpdate) {
      res.status(400).json({
        error: `Could not find a Conversation with ID ${id}`
      })
    }

    Object.entries(conversationData).forEach(([key, value]) => {
      conversationToUpdate[key] = value
    })
    
    await conversationToUpdate.save()

    res.json({
      message: `Conversation ${conversationData.name} was updated successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}

// Delete Conversation by ID

export const deleteConversationByID = async (req, res) => {
  try {
    const { id } = req.params

    const conversationToDelete = await Conversation.findByIdAndDelete(id)

    if (!conversationToDelete) {
      res.status(400).json({
        error: `Conversation not found and was not deleted`
      })
    }

    res.json({
      message: `Conversation was deleted successfully`
    })

  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error}`
    })
  }
}