const express = require('express')
const app = express()
const connectDatabase= require('./src/database/db')

const userRoute=require('./src/routes/use.route')
const port=3000

connectDatabase()
app.use(express.json())
app.use('/user', userRoute )

app.listen(port, ()=> console.log(` Servidor rodando na porta ${port} `))

//ROTAS => possui 3 items

//method HTTP  =   formam CRUD (create, read, update, delete)
//(GET=pega uma info - POST=cria uam info - PUT=altera toda info - PATCH=alterra parte da info - DELETE=apaga )
//name = identificador de rotas
//function (callback)  =  responsavel por executar algum comando

//app.get('/soma', (req, res) => {
  //const soma= 100 + 1
  //res.json(soma)
  //res.send({soma: soma})

//});