const express = require('express');
const router = express.Router();

const alunoController = require('../controller/alunoController')
const alunoMid = require('../middleware/alunoMiddleware')

const Aluno = require("../models/alunoModel")

router.use("/", alunoMid.teste, alunoController.saveAluno)

router.get('/', function(req, res) {
    Aluno.findAll().then(function(profs) {
        res.render('home', { profs: profs })
    })
})

// Cadastro, metodo GET para ser usado como localhost/cad
router.get('/cadaluno', function(req, res) {
    res.render('form_aluno')
})

// Adicionando Alunos (POST)
router.post('/addaluno', function(req, res) {
    Aluno.create({
        // esses dados vem dos models, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        celular: req.body.celular,
        sexo: req.body.sexo,
        data_nasc: req.body.data_nasc
    }).then(function() {
        res.redirect('/aluno')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

// Rota para deletar o usuario, nota-se que foi passado um parametro de requisito usando o dois-pontos (:)
router.get('/deletar/:id', function(req, res) {
    // destroy é uma função da biblioteca Aluno(que provem da biblioteca Sequelize)
    Aluno.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("REMOVIDO COM SUCESSO!")
    }).catch(function(erro) {
        res.send("NAO EXISTE!")
    })
})

module.exports = router