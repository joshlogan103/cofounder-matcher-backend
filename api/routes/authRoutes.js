import express from "express";

import { signup, login, verifyLoggedIn } from '../controllers/authController.js'

import { verifyAuth } from '../middleware/auth.js'

const router = express.Router()

// Allow a user to sign up

router.post('/signup', signup)

// Allow a user to login

router.post('/login', login)

// Verifiy that a user is logged in

router.post('/verifyLoggedIn', verifyAuth, verifyLoggedIn)

export default router

