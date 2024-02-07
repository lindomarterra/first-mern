import express from "express"
import userController from "../controllers/use.controller.js"
import {validId, validUser} from "../middlewares/global.middlewares.js"

const router = express.Router()

router.post("/", userController.create ) 
router.get("/", userController.findAll )
router.get("/:id", validId, validUser, userController.findById) 
router.patch("/:id", validId, validUser, userController.update)

//vai validar o user e id primeiro e depois  vai chamar usercontroller

export default router