import express from "express";
import { Router } from "express";
import { submitData } from "../controllers/student.submitData.js";
import { verify } from "../middleWare/checkExistingUser.js";

const router = Router();

router.route("/submit").post(verify, submitData);

export default router;
