module.exports = (sequelize, type) => {
    return sequelize.define('tipo_plano', {
        descricao: {
            type: type.STRING,
            allowNull: false
        },
        data_inicio: {
            type: type.DATE
        },
        data_fim: {
            type: type.DATE
        },
        valor: {
            type: type.DECIMAL(9, 2)
        }
    })
}