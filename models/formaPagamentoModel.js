const db = require('../database/db')

const FormaPagamento = db.sequelize.define('forma_pagamento', {
    descricao: {
        type: db.Sequelize.STRING
    }
})

module.exports = FormaPagamento