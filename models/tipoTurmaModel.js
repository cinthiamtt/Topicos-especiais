const db = require('../database/db')

const Tipo_turma = db.sequelize.define('tipo_turma', {
    descricao: {
        type: db.Sequelize.STRING
    }
})

module.exports = Tipo_turma