const express = require("express");
const router = express.Router();
const cryptoapiController=require('../controllers/cryptoapiController'); 


router.route('/').get(cryptoapiController.getRate);
router.route('/history').get(cryptoapiController.getRateIntime);


module.exports=router;