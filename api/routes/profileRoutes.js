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

router.get('/', getAllProfiles)

// Get all profiles with query

router.get('/query/', getProfilesByQuery)

// Get profile by user

router.get('/user-profile/:userId', getProfileByUserId)

// Get profile by id

router.get('/:id', getProfileById)

// Create profile

router.post('/', createProfile)

// Update profile by UserId

router.put('/user-profile/:userId', updateProfileByUserId)

// Update profile by Id

router.put('/:id', updateProfileById)

// Delete profile

router.delete('/:id', deleteProfileById)

export default router