// Import express and router
import express from "express";

const router = express.Router();

import { getAllConversations, getConversationById, createConversation, updateConversationById, deleteConversationById, getAllUsersConversations } from "../controllers/conversationController.js"

import { verifyAuth } from "../middleware/auth.js";

// Routes

// Get all conversations

router.get('/', verifyAuth, getAllConversations)

// Get conversations by a userId

router.get('/users/:id', verifyAuth, getAllUsersConversations)

// Get conversation by id

router.get('/:id', verifyAuth, getConversationById)

// Create conversation

router.post('/', verifyAuth, createConversation)

// Update conversation

router.put('/:id', verifyAuth, updateConversationById)

// Delete conversation

router.delete('/:id', verifyAuth, deleteConversationById)

export default router
