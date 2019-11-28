module.exports = (sequelize, type) => {
    return sequelize.define('turma', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: type.STRING,
        },
        data_inicio: {
            type: type.DATE,
        },
        data_fim: {
            type: type.DATE,
        },
        limite: {
            type: type.INTEGER,
        }
    })
}