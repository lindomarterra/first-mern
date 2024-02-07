import userService from "../services/user.service.js"

const create= async (req, res)=>{
  try{
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
        }  // quando tem a chave e o valor iguais podem apenas passar o nome como foi feito acima
    }) } catch (err){
        res.status(500).send({message: err.message}) //envia mensage de erro que vem do servidor
    }
}

const findAll=  async (req, res)=>{  //sempre que formos consultar o banco de dados devemos usar o asunc await
   try{
    const users= await userService.findAllService()  // vai retornar um array

    if(users.length === 0 ){
        return  res.status(400).send({ message: "There are no any registered users!" }) // return para ali a operação
    }
    
    res.send(users)} catch (err){
        res.status(500).send({message: err.message})
    }
}

const findById= async (req, res)=>{
    try{
        const user= req.user
    res.send(user)} catch (err){
        res.status(500).send({message: err.message})
    }
}

const update= async (req, res)=>{
    try{
        const {name, username, email, password, avatar, background} = req.body 

    if( !name && !username && !email && !password && !avatar && !background ){
        res.status(400).send({ message: "Submit at least one field for update" })
    }

    const {id, user} = req

    await userService.updateService(
        id,
        name,
        username,
        email,
        password,
        avatar,
        background
    )
    res.send({ message: "User successfully updated!" })} catch(err){
        res.status(500).send({message: err.message}) 
    }
}

export default {create, findAll, findById, update } 

//navegador por padrão usa o GET = pode usar thunderclient para poder usar post, put etc..
//STATUS CODE HTTP pesquisar