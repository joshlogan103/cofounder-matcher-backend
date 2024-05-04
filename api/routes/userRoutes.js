// Import express and router

import express from "express";

const router = express.Router()

import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from "../controllers/userController.js";

import { verifyAuth } from "../middleware/auth.js";

// Routes

// Get all users

router.get('/', verifyAuth, getAllUsers)

// Get user by id

router.get('/:id', verifyAuth, getUserById)

// Create user

router.post('/', verifyAuth, createUser)

// Update user

router.put('/:id', verifyAuth, updateUserById)

// Delete user

router.delete('/:id', verifyAuth, deleteUserById)

export default router