// Express criando Rota
const express = require('express');
const router = express.Router();

// Controller Required
const adminController = require('../controller/adminController');

// Middleware Required
const adminMid = require('../middleware/adminMiddleware');

// Model required
const Admin = require("../models/adminModel")

// Teste middleware
router.use("/", adminMid.teste, adminController.saveAdmin)

// Rota Index
router.get('/', function(req, res) {
    res.render('home_admin')
})

router.get


// Exportando Modulo para uso Global
module.exports = router