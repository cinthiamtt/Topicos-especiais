const db = require('../database/db')

const Admin = db.sequelize.define('admin', {
    nome: {
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
})

module.exports = Admin