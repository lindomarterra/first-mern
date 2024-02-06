const userService= require("../services/user.service")
const mongoose= require("mongoose")

const create= async (req, res)=>{
    const {name, username, email, password, avatar, background} = req.body 

    if( !name || !username || !email || !password || !avatar || !background ){
        res.status(400).send({ message: "Submit all fields for registration" })
    }

    const user= await userService.createService(req.body)

    if(!user){
        return res.status(400).send({message: "Error creating user"}) // return faz parar ali 
    }
    
    res.status(201).send({
        message: "User created successfully", 
        user:{
            id: user._id, 
            name, 
            username, 
            email,             
            avatar, 
            background
        }
    }) // quando tem a chave e o valor iguais podem apenas passar o nome como foi feito acima
}

const findAll=  async (req, res)=>{  //sempre que formos consultar o banco de dados devemos usar o asunc await
    const users= await userService.findAllService()  // vai retornar um array

    if(users.length === 0 ){
        return  res.status(400).send({ message: "There are no any registered users!" }) // return para ali a operação
    }
    
    res.send(users)
}

const findById= async (req, res)=>{
    const id= req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){  // verifica se o id é valido, deve importar mongoose
        return res.status(400).send({message: "ID is not valid!"})
    }

    const user= await userService.findByIdService(id)

    if(!user){
        return res.status(400).send({message: "User not found!"})
    }

    res.send(user)
}

const update= async (req, res)=>{
    const {name, username, email, password, avatar, background} = req.body 

    if( !name && !username && !email && !password && !avatar && !background ){
        res.status(400).send({ message: "Submit at least one field for update" })
    }

    const id= req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){  // verifica se o id é valido
        return res.status(400).send({message: "ID is not valid!"})
    }

    const user= await userService.findByIdService(id)

    if(!user){
        return res.status(400).send({message: "User not found!"})
    }

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    )

    res.send({ message: "User successfully updated!" })
}

module.exports = {create, findAll, findById, update } //module.exports geralmente exporta objetos

//navegador por padrão usa o GET = pode usar thunderclient para poder usar post, put etc..
//STATUS CODE HTTP pesquisar