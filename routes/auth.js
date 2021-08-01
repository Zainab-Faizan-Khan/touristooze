const express=require('express');
const util=require("util");
const authController=require('../controllers/auth');
const planController=require('../controllers/plan');
const router=express.Router();

router.post("/signup", authController.signup);
router.post("/signin",authController.signin);
router.post("/plantrip",planController.plantrip);
router.post("/plansindh",planController.plansindh);
router.post("/planpunjab",planController.planpunjab);
router.post("/planbaloch",planController.planbaloch);
router.post("/plankhyber",planController.plankhyber);
module.exports = router;