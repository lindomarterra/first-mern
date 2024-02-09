import User from "../models/User.js" //models vai se comunicar com banco de dadas

const loginService = (email) => User.findOne({email: email}) //chaves vai ser um filtro de busca

export { loginService }