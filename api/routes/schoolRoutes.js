// Import express and router

import express from "express";

const router = express.Router()

import { getAllSchools, getSchoolById, createSchool, updateSchoolById, deleteSchoolById } from "../controllers/schoolController.js"

import { verifyAuth } from "../middleware/auth.js";

// Routes

// Get all schools

router.get('/', verifyAuth, getAllSchools )

// Get one school by id

router.get('/:id', verifyAuth, getSchoolById)

// Create school

router.post('/', verifyAuth, createSchool)

// Update school by id

router.put('/:id', verifyAuth, updateSchoolById)

// Delete school by id

router.delete('/:id', verifyAuth, deleteSchoolById)

export default router