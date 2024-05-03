// Import express and router
import express from "express";

const router = express.Router();

import { getAllConversations, getConversationById, createConversation, updateConversationById, deleteConversationById, getAllUsersConversations } from "../controllers/conversationController.js"
// Routes

// Get all conversations

router.get('/', getAllConversations)

router.get('/users/:id', getAllUsersConversations)

// Get conversation by id

router.get('/:id', getConversationById)

// Create conversation

router.post('/', createConversation)

// Update conversation

router.put('/:id',  updateConversationById)

// Delete conversation

router.delete('/:id', deleteConversationById)

export default router
