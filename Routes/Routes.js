const express=require("express");
const { sendEmailController } = require("../Controller/Controller");

const router=express.Router();

router.post('/sendEmail',sendEmailController)


module.exports=router
