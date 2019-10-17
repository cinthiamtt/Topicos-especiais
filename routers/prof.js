const express = require('express');
const router = express.Router();

const profController = require('../controller/profController');
const profMid = require('../middleware/profMiddleware');

const Prof = require("../models/profModel")

router.use("/", profMid.teste, profController.saveProf)

router.get('/', function(req, res) {
    Prof.findAll().then(function(profs) {
        res.render('home', { profs: profs })
    })
})

// Cadastro, metodo GET para ser usado como localhost/cad dos models
router.get('/cadprof', function(req, res) {
    res.render('form_prof')
})

// Metodo Post recebendo os dados passados no html form.handlebars dentro do GET acima
router.post('/addprof', function(req, res) {
    Prof.create({
        // esses dados vem dos models, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        celular: req.body.celular,
        sexo: req.body.sexo,
        data_nasc: req.body.data_nasc
    }).then(function() {
        res.redirect('/prof')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

// Rota para deletar o usuario, nota-se que foi passado um parametro de requisito usando o dois-pontos (:)
router.get('/deletar/:id', function(req, res) {
    // destroy é uma função da biblioteca do Model(que provem da biblioteca Sequelize)
    Prof.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("REMOVIDO COM SUCESSO!")
        res.redirect("/prof")
    }).catch(function(erro) {
        res.send("NAO EXISTE!")
    })
})

module.exports = router