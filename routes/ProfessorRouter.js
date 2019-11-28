const ProfessorMid = require('../middlewares/ProfessorMid');
var ProfessorController = require("../controllers/ProfessorController");
var { Professor } = require('../models/sequelize');

const express = require("express");
const router = express.Router();

// -----------------------------------------------------------
//HOME
router.get('/home', (req, res) => {
    res.render('ProfessorViews/prof_home');
})

// -----------------------------------------------------------
// Validate
router.get('/login', (req, res) => {
    res.render('ProfessorViews/login_prof');
})

router.route('/validate/prof')
    .post(ProfessorMid.auth, ProfessorController.validate)


// -----------------------------------------------------------
// Create Professor
router.get('/register', (req, res) => {
    res.render('ProfessorViews/register_prof');
})

router.route('/register/profs')
    .post(ProfessorMid.auth, ProfessorController.create);


// ----------------------------------------------------------- 
// ListAll Professors
router.route('/listprofs')
    .get(ProfessorController.list);

// -----------------------------------------------------------    
// Read One Professor
router.route('/readprof/:id')
    .get(ProfessorController.read);

// -----------------------------------------------------------
// Update Professor
router.get('/update/editar_prof/:id', (req, res) => {
    Professor.findOne({ where: { id: req.params.id } }).then(function(prof) {
        res.render('ProfessorViews/edit_prof', { prof: prof })
    })
})

router.route('/update/prof/:id')
    .put(ProfessorMid.auth, ProfessorController.update);

// -----------------------------------------------------------    
// Delete Professor
router.route('/del/:id')
    .delete(ProfessorController.delete);

module.exports = router