// Import express and router

import express from "express";

const router = express.Router()

import {
  getAllProfiles,
  getProfilesByQuery,
  getProfileById,
  createProfile,
  updateProfileByUserId,
  updateProfileById,
  deleteProfileById,
  getProfileByUserId
} from '../controllers/profileController.js'

import { verifyAuth } from "../middleware/auth.js";

// Routes

// Get all profiles

router.get('/', verifyAuth, getAllProfiles)

// Get all profiles with query

router.get('/query/', verifyAuth, getProfilesByQuery)

// Get profile by user

router.get('/user-profile/:userId', verifyAuth, getProfileByUserId)

// Get profile by id

router.get('/:id', verifyAuth, getProfileById)

// Create profile

router.post('/', verifyAuth ,createProfile)

// Update profile by UserId

router.put('/user-profile/:userId', verifyAuth, updateProfileByUserId)

// Update profile by Id

router.put('/:id', verifyAuth, updateProfileById)

// Delete profile

router.delete('/:id', verifyAuth, deleteProfileById)

export default router