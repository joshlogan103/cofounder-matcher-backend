// Import envs
import dotenv from 'dotenv/config.js';

// Import modules
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import authRouter from './api/routes/authRoutes.js';
import userRouter from './api/routes/userRoutes.js';
import favoriteRouter from './api/routes/favoriteRoutes.js';
import messageRouter from './api/routes/messageRoutes.js';
import schoolRouter from './api/routes/schoolRoutes.js';
import conversationRouter from './api/routes/conversationRoutes.js';
import profileRouter from './api/routes/profileRoutes.js';
import helperRouter from './api/routes/helperRoutes.js';

// Import database connection
import './config/db.js'

//Initialize express instance
const app = express()

// Middleware
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

// Routes
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/favorites', favoriteRouter)
app.use('/api/messages', messageRouter)
app.use('/api/schools', schoolRouter)
app.use('/api/conversations', conversationRouter)
app.use('/api/profiles', profileRouter)
app.use('/api/profile-list-vals', helperRouter)

// Set port for use in server
const PORT = process.env.PORT || 3001

// Start server
app.listen(PORT, () => {
  console.log("Server running on port ", PORT)
})


