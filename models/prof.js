const db = require('./db')

const Prof = db.sequelize.define('professor', {
    cpf: {
        type: db.Sequelize.STRING
    },
    telefone: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    },
    sexo: {
        type: db.Sequelize.CHAR
    },
    email: {
        type: db.Sequelize.STRING
    },
    nome: {
        type: db.Sequelize.STRING
    },
    data_nasc: {
        type: db.Sequelize.DATE
    },
    senha: {
        type: db.Sequelize.STRING
    }
})


module.exports = Prof