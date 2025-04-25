import express from "express";
import { signupUser, loginUser, getProfile, logoutUser } from "../controller/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Routes
router.post("/signup", signupUser);  // Route for signup
router.post("/login", loginUser);    // Route for login
router.get("/profile", protect, getProfile);  // Protected route to get profile
router.post("/logout", logoutUser);  // Route for logout

export default router;
