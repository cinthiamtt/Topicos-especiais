const db = require('../database/db')

const Modalidade = db.sequelize.define('modalidade', {
    descricao: {
        type: db.Sequelize.STRING
    }
})

module.exports = Modalidade