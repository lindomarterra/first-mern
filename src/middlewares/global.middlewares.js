const mongoose= require("mongoose") // precisa importa mongoose
const userService= require("../services/user.service") // serve para acessar o banco de dados

const validId= (req, res, next)=>{
    const id= req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){  // verifica se o id é valido, deve importar mongoose
        return res.status(400).send({message: "ID is not valid!"})
    }
    next()
}

const validUser= async (req, res, next)=>{
    const id= req.params.id

    const user= await userService.findByIdService(id)

    if(!user){
        return res.status(400).send({message: "User not found!"})
    }

    req.id= id
    req.user= user
    //informa para proxima função que vai id e user
    next()
}

module.exports= { validId, validUser}

// middlewares são funções interceptadoras