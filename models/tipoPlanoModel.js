const db = require('../database/db')

const TipoPlano = db.sequelize.define('tipo_plano', {
    descricao: {
        type: db.Sequelize.STRING
    },
    data_inicio: {
        type: db.Sequelize.DATE
    },
    data_fim: {
        type: db.Sequelize.DATE
    },
    valor: {
        type: db.Sequelize.NUMBER
    }
})

module.exports = TipoPlano