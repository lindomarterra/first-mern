const route=require('express').Router()
const userController= require("../controllers/use.controller")

route.post("/", userController.create )
route.get("/", userController.findAll )
route.get("/:id", userController.findById)  // pode ser :nome, :idade, :modelo etc..
route.patch("/:id", userController.update)


module.exports= route