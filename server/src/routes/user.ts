import express from "express";
import { getProfile, updateProfile } from "../controllers/userController";
import { authenticate } from "../middleware/auth";

const router = express.Router();

router.get("/profile", authenticate, getProfile);
router.put("/profile", authenticate, updateProfile);

export default router;
