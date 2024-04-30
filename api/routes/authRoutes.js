import express from "express";

import { signup, login, verifyLoggedIn } from '../controllers/authController.js'

const router = express.Router()

// Allow a user to sign up

router.post('/signup', signup)

// Allow a user to login

router.post('/signup', login)

// Verifiy that a user is logged in

router.post('/signup', verifyLoggedIn)

export default router

