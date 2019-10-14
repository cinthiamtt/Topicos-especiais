//express - chamada
const express = require("express");

// criando um 'app' com a biblioteca express(para nao ficar utilizando express.algumacoisa toda hora)
const app = express();

//handlebars - chamada
const handlebars = require('express-handlebars')

//bodyParser
const BodyParser = require('body-parser')

//models
const Prof = require('./models/prof')
const Aluno = require('./models/aluno')


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
    Prof.findAll().then(function(profs) {
        res.render('home', { profs: profs })
    })
})


// Cadastro, metodo GET para ser usado como localhost/cad
app.get('/cadaluno', function(req, res) {
    res.render('form_aluno')
})

// Adicionando Alunos (POST)
app.post('/addaluno', function(req, res) {
    Aluno.create({
        // esses dados vem dos models, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        celular: req.body.celular,
        sexo: req.body.sexo,
        data_nasc: req.body.data_nasc
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})


// Cadastro, metodo GET para ser usado como localhost/cad dos models
app.get('/cadprof', function(req, res) {
    res.render('form_prof')
})

// Metodo Post recebendo os dados passados no html form.handlebars dentro do GET acima
app.post('/addprof', function(req, res) {
    Prof.create({
        // esses dados vem dos models, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        celular: req.body.celular,
        sexo: req.body.sexo,
        data_nasc: req.body.data_nasc
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})


// Rota para deletar o usuario, nota-se que foi passado um parametro de requisito usando o dois-pontos (:)
app.get('/deletar/:id', function(req, res) {
    // destroy é uma função da biblioteca Aluno(que provem da biblioteca Sequelize)
    Prof.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("REMOVIDO COM SUCESSO!")
    }).catch(function(erro) {
        res.send("NAO EXISTE!")
    })
})

//AULAA
app.get('/person', function(req, res) {
        res.render('form_prof')

    })
    //AULAA



//Porta - Servidor
app.listen(8081, function() {
    console.log("Servidor Local Rodando na URL: http://localhost:8081");
});