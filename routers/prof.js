// Express criando Rota
const express = require('express');
const router = express.Router();

// Controller Required
const profController = require('../controller/profController');

// Middleware Required
const profMid = require('../middleware/profMiddleware');

// Model required
const Prof = require("../models/profModel")

// Teste middleware
router.use("/", profMid.teste, profController.saveProf)

// Rota Index
router.get('/', function(req, res) {
    Prof.findAll().then(function(profs) {
        res.render('home', { profs: profs })
    })
})

// Rotas de Formulario
router.get('/cadprof', function(req, res) {
    res.render('form_prof')
})

// Post para dentro do Banco
router.post('/addprof', function(req, res, next) {
    // Validacao
    var errors = []

    // Validacao de CPF
    if (!req.body.cpf || typeof req.body.cpf == undefined || req.body.cpf == null) {
        errors.push({ texto: "CPF Inválido" })
    }

    if (errors.length > 0) {
        res.render("form_prof", { errors: errors })
    } else {
        // Create = função de Criação da biblioteca do Sequelize(proveniente do Model importado)
        Prof.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
            celular: req.body.celular,
            sexo: req.body.sexo,
            data_nasc: req.body.data_nasc
        }).then(function() {
            req.flash("success_msg", "Usuário Cadastrado com Sucesso!")
            res.redirect('/prof')
        }).catch(function(erro) {
            req.flash("error_msg", "Falha ao Salvar Usuário, tente novamente...")
            res.redirect('/prof')
        })
    }
})

// Deletar
router.get('/deletar/:id', function(req, res) {
    // Destroy = função de Remoção da biblioteca do Sequelize(proveniente do Model importado)
    Prof.destroy({ where: { 'id': req.params.id } }).then(function() {
        req.flash("success_msg", "Deletado com Sucesso!")
        res.redirect("/prof")
    }).catch(function(erro) {
        req.flash("error_msg", "Algo deu errado, tente novamente...")
        res.redirect("/prof")
    })
})

// Editar
router.get('/edit/:id', function(req, res, next) {
    Prof.findOne({ _id: req.params.id }).then(function(prof) {
        res.render("edit_prof", { prof: prof })
    }).catch(function(erro) {
        res.send("NAO EXISTE!")
    })
})

router.post('/editprof', function(req, res, next) {
    Prof.findOne({ _id: req.body.id }).then(function(prof) {

        prof.nome = req.body.nome
        prof.cpf = req.body.cpf
        prof.telefone = req.body.telefone
        prof.celular = req.body.celular
        prof.sexo = req.body.sexo
        prof.data_nasc = req.body.data_nasc

    })

    profController.saveProf().then(function() {
        req.flash("success_msg", "Editado com sucesso!")
        res.redirect("/prof")
    }).catch(function(erro) {
        req.flash("error_msg", "Deu ruim!")
        res.redirect("/prof")
    })
})


// Exportando Modulo para uso Global
module.exports = router