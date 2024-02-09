 // {Router} é uma função do express por isso pode ser desconstruido usando {}
 import { Router } from "express" 
 const router = Router()

 import { login } from '../controllers/auth.controller.js'

 router.post("/", login)

 export default router
