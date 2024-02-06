// const { models } = require("mongoose")
const User= require("../models/User")

const createService= (body) => User.create(body)

const findAllService= () => User.find()  // .find é a função do mongose para buscar todos os banco de dados

const findByIdService= (id) => User.findById(id)  //findbyid é um metodo do mongoose

const updateService= (
    id,
    name,
    username,
    email,
    password,
    avatar,
    background
) => User.findOneAndUpdate({_id: id},{ name, username, email, password, avatar, background})

// se colocar as chaves em uma arrow function deve-se colocar o return
module.exports= { createService, findAllService, findByIdService, updateService }