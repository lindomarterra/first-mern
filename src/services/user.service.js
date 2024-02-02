// const { models } = require("mongoose")
const User= require("../models/User")

const createService= (body) => User.create(body)

const findAllService= () => User.find()  // .find é a função do mongose para buscar todos os banco de dados

const findByIdService= (id) => User.findById(id)


module.exports= {
    createService,
    findAllService,
    findByIdService
}