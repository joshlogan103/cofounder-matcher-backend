// Import express and router

import express from "express";

const router = express.Router()
import { getAllSchools, getSchoolById, createSchool, updateSchoolById, deleteSchoolById } from "../controllers/schoolController.js"

// Routes

// Get all schools

router.get('/', getAllSchools )

// Get one school by id

router.get('/:id', getSchoolById)

// Create school

router.post('/', createSchool)

// Update school by id

router.put('/:id', updateSchoolById)

// Delete school by id

router.delete('/:id', deleteSchoolById)

export default router