module.exports = (sequelize, type) => {
    return sequelize.define('aluno', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        cpf: {
            type: type.STRING,
            unique: true,
            allowNull: false
        },
        email: {
            type: type.STRING,
            // validate: {
            //     isEmail: true
            // }
        },
        telefone: {
            type: type.STRING
        },
        celular: {
            type: type.STRING
        },
        sexo: {
            type: type.STRING
        },
        data_nasc: {
            type: type.DATE
        },
        password: {
            type: type.STRING,
            select: false,
            allowNull: false,
            // validate: {
            //     notEmpty: true
            // }
        }
    })
}