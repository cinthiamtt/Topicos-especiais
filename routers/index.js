// Express criando Rota
const express = require('express');
const router = express.Router();

// Rota Index
router.get('/', function(req, res) {
    res.render('index')
})

module.exports = router