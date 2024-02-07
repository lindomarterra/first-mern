const express = require('express')
const app = express()
const connectDatabase= require('./src/database/db') //funcão que liga com mongoDB
const userRoute=require('./src/routes/use.route') 
const port=3000

connectDatabase()
app.use(express.json())  // serve para poder enviar formularios json sem isso não funciona
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