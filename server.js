//express - chamada
const express = require("express");

// criando um 'app' com a biblioteca express(para nao ficar utilizando express.algumacoisa toda hora)
const app = express();

//handlebars - chamada
const handlebars = require('express-handlebars')

//Exportando Rotas da pasta /Routers
const profRouter = require("./routers/prof")
const alunoRouter = require("./routers/aluno")

//bodyParser
const BodyParser = require('body-parser')

//path
const path = require("path")

// Config
// Template Engine - handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Body-Parser
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

// public
app.use(express.static(path.join(__dirname, "public")))

// Rotas
app.use('/prof', profRouter)
app.use('/aluno', alunoRouter)

//Porta - Servidor
app.listen(8081, function() {
    console.log("Servidor Local Rodando na URL: http://localhost:8081");
});