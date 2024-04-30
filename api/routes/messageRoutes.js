// Import express and router
import express from "express";

const router = express.Router();

import { getAllMessages, getMessageById, createMessageAndCreateConversation, createMessageAndUpdateConversation, updateMessageById, deleteMessageById } from "../controllers/messageController.js"
// Routes

// Get all messages

router.get('/', getAllMessages)

// Get message by id

router.get('/:id', getMessageById)

// Create message and create a new conversation

router.post('/new-conversation/', createMessageAndCreateConversation)

// Create message and update an existing conversation

router.post('/update-conversation/:conversationId', createMessageAndUpdateConversation)

// Update message

router.put('/:id', updateMessageById )

// Delete message

router.delete('/:id', deleteMessageById)



export default router