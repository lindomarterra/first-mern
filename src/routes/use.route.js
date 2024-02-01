const route=require('express').Router()
const userController= require("../controllers/use.controller")

route.post("/", userController.create )
route.get("/", userController.findAll )


module.exports= route