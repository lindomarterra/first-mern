import express from 'express'
import connectDatabase from './src/database/db.js'
import userRoute from './src/routes/use.route.js'

const port=3000
const app = express()


connectDatabase()
app.use(express.json())  // serve para poder enviar formularios em formato json 
app.use('/user', userRoute )

app.listen(port, ()=> console.log(` Servidor rodando na porta ${port} `))

// npm init no terminal = informa que estamos começãndo um projeto em NODEjs 
//ROTAS => possui 3 items

//method HTTP  =   formam CRUD (create, read, update, delete)
//(GET=pega uma info - 
//POST=cria uam info - 
//PUT=altera toda info - 
//PATCH=alterra parte da info - 
//DELETE=apaga )

//name = identificador da rotas
//function (callback)  =  responsavel por executar algum comando

//app.get('/soma', (req, res) => {
  //const soma= 100 + 1
  //res.json(soma)     requisiçẽos em formato http deve ser usado um arquivo json
  //res.send({soma: soma})


  //usar extensão json view

//});