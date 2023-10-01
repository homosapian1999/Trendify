import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

const router = express.Router();

//routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || METHOD POST
router.post("/login", loginController);

// Protected Route for User

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// Protected Route for Admin

router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// forgot Password Route || METHOD POST
router.post("/forgot-password", forgotPasswordController);

// Update Profile

router.put("/profile", requireSignIn, updateProfileController);

//orders user
router.get("/orders", requireSignIn, getOrdersController);

//orders admin
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

// Test Routes

router.get("/test", requireSignIn, isAdmin, testController);

export default router;
