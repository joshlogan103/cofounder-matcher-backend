// Import express and router

import express from "express";
import { getAllFavorites, getFavoriteById, getFavoriteByUserId, createFavorite, updateFavoriteById, deleteFavoriteById } from "../controllers/favoriteController.js"

import { verifyAuth } from "../middleware/auth.js";

const router = express.Router()

// Routes

// Get all favorites

router.get('/', verifyAuth, getAllFavorites)

// Get all favorites by userId

router.get('/my-favorites', verifyAuth, getFavoriteByUserId )

// Get one favorite by id

router.get('/:id', verifyAuth, getFavoriteById )

// Create favorite 

router.post('/', verifyAuth, createFavorite)

// Update favorite by id

router.put('/:id', verifyAuth, updateFavoriteById )

// Delete favorites by id

router.delete('/:id', verifyAuth, deleteFavoriteById)

export default router