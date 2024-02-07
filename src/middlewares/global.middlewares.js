import mongoose from "mongoose"
import userService from "../services/user.service.js" 


export const validId= (req, res, next)=>{
    try{
        const id= req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){  // verifica se o id é valido, deve importar mongoose
        return res.status(400).send({message: "ID is not valid!"})
    }
    next()} catch(err){
        res.status(500).send({message: err.message}) 
    }
}

export const validUser= async (req, res, next)=>{
    try{
        const id= req.params.id

    const user= await userService.findByIdService(id)

    if(!user){
        return res.status(400).send({message: "User not found!"})
    }

    req.id= id
    req.user= user
    //informa para proxima função que vai id e user
    next()} catch(err){
        res.status(500).send({message: err.message}) 
    }
}


// middlewares são funções interceptadoras