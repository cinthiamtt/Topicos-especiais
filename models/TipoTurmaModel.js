module.exports = (sequelize, type) => {
    return sequelize.define('tipo_turma', {
        descricao: {
            type: type.STRING,
            allowNull: false
        }
    })
}