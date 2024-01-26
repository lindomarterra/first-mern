const create= (req, res)=>{
    const {name, username, email, password, avatar, background} = req.body 

    if( !name || !username || !email || !password || !avatar || !background ){
        res.status(400).send({ message: "submit all fields for registragion" })
    }
    res.status(201).send({
        mesage: "User created successfully", 
        user:{
            name, 
            username, 
            email,             
            avatar, 
            background
        }
    })

}

module.exports = {create}

//navegador por padrão usa o GET = pode usar thunderclient para simular o navegador
//STATUS CODE HTTP pesquisar