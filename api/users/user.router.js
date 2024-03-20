const {createUser,getUser}=require('./user.controller')

const router=require('express').Router()

router.post("/",createUser)
router.get("/",getUser)

module.exports=router