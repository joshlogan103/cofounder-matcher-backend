// Import express and router

import express from "express";
import { getAllFavorites, getFavoriteById, createFavorite, updateFavoriteById, deleteFavoriteById } from "../controllers/favoriteController.js"

const router = express.Router()

// Routes

// Get all favorites

router.get('/', getAllFavorites)

// Get one favorite by id

router.get('/:id', getFavoriteById )

// Create favorite 

router.post('/', createFavorite)

// Update favorite by id

router.put('/:id', updateFavoriteById )

// Delete favorites by id

router.delete('/:id', deleteFavoriteById)

export default router