import express from "express";
import accountRoute from "./accountRoute.js";

const router = express.Router();

router.use("/account", accountRoute);

export default router;