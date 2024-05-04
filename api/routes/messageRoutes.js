// Import express and router
import express from "express";

const router = express.Router();

import { getAllMessages, getMessageById, createMessageAndCreateConversation, createMessageAndUpdateConversation, updateMessageById, deleteMessageById, createMessage } from "../controllers/messageController.js"

import { verifyAuth } from "../middleware/auth.js";

// Routes

// Get all messages

router.get('/', verifyAuth, getAllMessages)

// Get message by id

router.get('/:id', verifyAuth, getMessageById)

// create message
router.post('/:conversationId', verifyAuth, createMessage)

// Create message and create a new conversation

router.post('/new-conversation/', verifyAuth, createMessageAndCreateConversation)

// Create message and update an existing conversation

router.post('/update-conversation/:conversationId', verifyAuth, createMessageAndUpdateConversation)

// Update message

router.put('/:id', verifyAuth, updateMessageById )

// Delete message

router.delete('/:id', verifyAuth, deleteMessageById)



export default router