//import bcrypt from "bcrypt"  // é preciso usar bcrypt para validar o usuário
import { loginService } from "../services/auth.service.js"

const login = async (req, res) => {

    const {email, password}= req.body  // usuario vai digitar emai e password

    try{
        const user = await loginService(email) // buscar o usuario atraves do email cadastrado 

        //const paswordIsValid= bcrypt.compare(password, user.password)

        res.send(user)

    } catch (err) {
        res.status(500).send(err.message)
    }

    
}

export {login}


//REGRA: tudo que o usuário digitar vai chegar no backend como BODY