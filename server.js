//express - chamada
const express = require("express");

// criando um 'app' com a biblioteca express(para nao ficar utilizando express.algumacoisa toda hora)
const app = express();

//handlebars - chamada
const handlebars = require('express-handlebars')

//bodyParser
const BodyParser = require('body-parser')

//models
const Aluno = require('./models/Aluno')


// Config
// Template Engine - handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Body-Parser
app.use(BodyParser.urlencoded({ extended: false }))
app.use(BodyParser.json())

// Rotas
// Index (HOME)
app.get('/', function(req, res) {
    Aluno.findAll().then(function(alunos) {
        res.render('home', { alunos: alunos })
    })
})

// Cadastro, metodo GET para ser usado como localhost/cad
app.get('/cad', function(req, res) {
    res.render('form')
})

// Metodo Post recebendo os dados passados no html form.handlebars dentro do GET acima
app.post('/add', function(req, res) {
    Aluno.create({
        // esses dados vem do model/Aluno, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        Cpf: req.body.cpf
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})


// Rota para deletar o usuario, nota-se que foi passado um parametro de requisito usando o dois-pontos (:)
app.get('/deletar/:id', function(req, res) {
    // destroy é uma função da biblioteca Aluno(que provem da biblioteca Sequelize)
    Aluno.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("REMOVIDO COM SUCESSO!")
    }).catch(function(erro) {
        res.send("NAO EXISTE!")
    })
})


//Porta - Servidor
app.listen(8081, function() {
    console.log("Servidor Local Rodando na URL: http://localhost:8081");
});