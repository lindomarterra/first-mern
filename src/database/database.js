import mongoose from "mongoose"

const connectDatabase = () => {
  console.log("wait connecting to the database")
  console.log(process.env)

  //mongoose.connect é um codigo asyncrono precisa de javascript para fazer esperar o resposta
  mongoose
    .connect(  process.env.MONGODB_URI,  // pega a url salva na variavel global .env
      { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
      }
    )
    .then(() => console.log("MongoDB Atlas connected!"))  
    .catch((error) => console.log(error))
    //se a promessa de vem do servidor for ok executará o then senão o catch
}

export default connectDatabase

//ESSA funcão precisa ser executada no arquivo principal