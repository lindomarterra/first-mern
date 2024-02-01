const userService= require("../services/user.service")

const create= async (req, res)=>{
    const {name, username, email, password, avatar, background} = req.body 

    if( !name || !username || !email || !password || !avatar || !background ){
        res.status(400).send({ message: "Submit all fields for registration" })
    }

    const user= await userService.createService(req.body)

    if(!user){
        return res.status(400).send({message: "Error creating user"})
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
    })
}

const findAll=  async (res)=>{  //sempre que formos consultar o banco de dados devemos usar o asunc await
    const users= await userService.findAllService()

    if(users.length === 0 ){
        return  res.status(400).send({ message: "There are no any registered users!" })
    }
    
    res.send(users)
}

module.exports = {create, findAll}

//navegador por padrão usa o GET = pode usar thunderclient para poder usar post, put etc..
//STATUS CODE HTTP pesquisar