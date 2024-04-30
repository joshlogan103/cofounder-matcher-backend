// Import express and router

import express from "express";

const router = express.Router()

import { getAllUsers, getUserById, createUser, updateUserById, deleteUserById } from "../controllers/userController.js";

// Routes

// Get all users

router.get('/', getAllUsers)

// Get user by id

router.get('/:id', getUserById)

// Create user

router.post('/', createUser)

// Update user

router.put('/:id', updateUserById)

// Delete user

router.delete('/:id', deleteUserById)

export default router