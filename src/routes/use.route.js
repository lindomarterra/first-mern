const route=require('express').Router()
const userController= require("../controllers/use.controller")

const {validId, validUser} = require("../middlewares/global.middlewares")

route.post("/", userController.create ) 
route.get("/", userController.findAll )
route.get("/:id", validId, validUser, userController.findById) 
route.patch("/:id", validId, validUser, userController.update)
//vai validar o user e id primeiro e depois  vai chamar usercontroller


module.exports= route