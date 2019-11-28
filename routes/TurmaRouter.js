'use strict';

const TurmaController = require("../controllers/TurmaController")
const express = require("express");
const router = express.Router();

// Create Turma
router.route('/register/turma')
    .post(TurmaController.create);


// List ALL Turmas
router.route('/listturmas')
    .get(TurmaController.list);


// List ALL Turma to ONE Professor
router.route('/listturmas/:ProfessorId')
    .get(TurmaController.read);


// Update
router.route('/update/turma/:id')
    .put(TurmaController.update);


// Delete
router.route('/del/:id')
    .delete(TurmaController.delete);


module.exports = router