'use strict';

var TipoTurmaController = require("../controllers/TipoTurmaController");
const express = require("express");
const router = express.Router();

// Create Tipo Turma
router.route('/register/tipoturma')
    .post(TipoTurmaController.create);

// ListAll Tipo Turma
router.route('/listtipoturma')
    .get(TipoTurmaController.list);

// Read One Tipo Turma
router.route('/readtipoturma/:id')
    .get(TipoTurmaController.read);

// Update Tipo Turma
router.route('/update/tipoturma/:id')
    .put(TipoTurmaController.update);

// Delete Tipo Turma
router.route('/del/:id')
    .delete(TipoTurmaController.delete);

module.exports = router