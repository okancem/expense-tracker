import express from "express";
import * as ctrlAccount from "../controllers/accountController.js";

const router = express.Router();

router.post("/login", ctrlAccount.login);
router.post("/register", ctrlAccount.register);

export default router;