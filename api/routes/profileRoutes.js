// Import express and router

import express from "express";

const router = express.Router()

import {
  getAllProfiles,
  getProfileById,
  createProfile,
  updateProfileById,
  deleteProfileById
} from '../controllers/profileController.js'

// Routes

// Get all profiles

router.get('/', getAllProfiles)

// Get profile by id

router.get('/:id', getProfileById)

// Create profile

router.post('/', createProfile)

// Update profile

router.put('/:id', updateProfileById)

// Delete profile

router.delete('/:id', deleteProfileById)

export default router