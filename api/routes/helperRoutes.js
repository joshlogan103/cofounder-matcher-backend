import express from "express";
import { getProgramType, getHasIdea, getAreasOfResponsibility, getIndustryInterests } from "../controllers/helperController.js";

const router = express.Router();

// Routes

// Get all programType values from Profile model enums

router.get('/program-type', getProgramType);

// Get all hasIdea values from Profile model enums

router.get('/has-idea', getHasIdea);

// Get all agreasOfResponsibility values from Profile model enums

router.get('/areas-of-responsibility', getAreasOfResponsibility);

// Get all industryInterest values types from Profile model enums

router.get('/industry-interests', getIndustryInterests);

export default router;