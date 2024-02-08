import  mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema= new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
        // select: false    não deixa retornar quando é efetuado uma consulta
    },
    avatar: {
        type: String,
        required: true
    },
    background: {
        type: String,
        required: true
    }
})


// CRYPTOGRAFIA DO CÓDIGO
// função pre manda executar algo antes de salvar a função, nesse caso não deve ser arrow function
// hash cria uma senha cryptografada, pega o this.password e faz 10 rodadas de calculo e vai gerar um hash
userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()  // vai fazer parar a tarefa e seguir lendo o código
})


const User = mongoose.model("User", userSchema)

export default User





