// Chamando biblioteca Sequelize
const Sequelize = require('sequelize')

// Conexao ao BD
const sequelize = new Sequelize('YogaDB', 'postgres', 'postgres', {
    host: "localhost",
    dialect: 'postgresql'
})

// Sequencia: Database, User, Passwd, host e dialect
// Dialect = Tipo Banco - exemplo: Postgresql, mysql, OracleDB e etc


// Exportando Modulos para uso global
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}