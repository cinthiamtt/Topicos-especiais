var AlunoController = require("../controllers/AlunoController");
var AlunoMid = require("../middlewares/AlunoMid");
var { Aluno } = require('../models/sequelize');

const express = require("express");
const router = express.Router();

// -----------------------------------------------------------
//HOME
router.get('/home', (req, res) => {
    res.render('AlunoViews/aluno_home');
})

// -----------------------------------------------------------
// Validate
router.get('/login', (req, res) => {
    res.render('AlunoViews/login_aluno');
})

router.route('/validate/aluno')
    .post(AlunoMid.auth, AlunoController.validate)

// -----------------------------------------------------------
//Create Aluno
router.get('/register', (req, res) => {
    res.render('AlunoViews/register_aluno');
})

router.route('/register/alunos')
    .post(AlunoMid.auth, AlunoController.create);


// -----------------------------------------------------------
//Read One Aluno
router.route('/readaluno/:id')
    .get(AlunoController.read);;


// -----------------------------------------------------------    
//List All Alunos
router.route('/listalunos')
    .get(AlunoController.list);


// -----------------------------------------------------------
//Update Aluno
router.get('/update/editar_aluno/:id', (req, res) => {
    Aluno.findOne({ where: { id: req.params.id } }).then(function(aluno) {
        res.render('AlunoViews/edit_aluno', { aluno: aluno })
    })
})

router.route('/update/aluno/:id')
    .put(AlunoMid.auth, AlunoController.update);


// -----------------------------------------------------------    
//Delete aluno
router.route('/del/:id')
    .delete(AlunoController.delete)


module.exports = router