const express=require('express');
const util=require("util");
const authController=require('../controllers/auth');
const planController=require('../controllers/plan');
const router=express.Router();

router.post("/signup", authController.signup);
router.post("/signin",authController.signin);
router.post("/pack",planController.pack);

router.post("/plansindh",planController.plansindh);
router.post("/planpunjab",planController.planpunjab);
router.post("/planbaloch",planController.planbaloch);
router.post("/plankhyber",planController.plankhyber);
router.post("/plantrip",planController.plantrip);
router.post("/payeasy",planController.payeasy);
router.post("/payjazz",planController.payjazz);
router.post("/paycard",planController.paycard);
router.post("/mytrip",planController.mytrip);
router.post("/canceltrip",planController.canceltrip);
router.post("/wait",planController.wait);
module.exports = router;