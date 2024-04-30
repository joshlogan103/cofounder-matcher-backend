import express from "express";
import { getProgramType, getHasIdea, getAreasOfResponsibility, getIndustryInterests } from "../controllers/helperController.js";

const router = express.Router();

//Routes

router.get('/programType', getProgramType);
router.get('/hasIdea', getHasIdea);
router.get('/areasOfResponsibility', getAreasOfResponsibility);
router.get('/industryInterests', getIndustryInterests);

export default router;