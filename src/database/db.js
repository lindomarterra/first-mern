import mongoose from "mongoose"

const connectDatabase = () => {
  console.log("wait connecting to the database")

  mongoose
    .connect(  //mongoose.connect é um codigo asyncrono precisa de javascript para fazer esperar o resposta
      "mongodb+srv://terra:mernstackdeveloper@cluster0.gmedg21.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected!"))  //se a promessa de vem do servidor for ok executará o then
    .catch((error) => console.log(error))
}

export default connectDatabase

//ESSA funcão precisa ser executada no arquivo principal