const express = require('express');
const router = express.Router();

const profController = require('../controllers/alunoController');
const profMid = require('../middlewares/profMiddleware.js');

router.post("/", profMid.test, alunoController.saveProf);

module.exports = router