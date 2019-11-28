const bcrypt = require('bcryptjs');

module.exports = (sequelize, type) => {
    return sequelize.define('professor', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false,
            // validate: {
            //     notEmpty: {
            //         args: true,
            //         msg: "Nome não pode ser nulo!"
            //     }
            // }
        },
        cpf: {
            type: type.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: 14,
                notEmpty: true
            }
        },
        email: {
            type: type.STRING,
            // unique: true,
            //     validate: {
            //         notEmpty: {
            //             arg: true,
            //             msg: "O Email deve ser inserido."
            //         },
            //         len: {
            //             args: [6, 128],
            //             msg: "Email deve possuir entre 6 e 128 caracteres."
            //         },
            //         isEmail: {
            //             msg: "Email deve ser valido."
            //         }
            //     }
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
            //     select: false,
            //     allowNull: false,
            //     validate: {
            //         notEmpty: {
            //             arg: true,
            //             msg: "A senha deve ser inserida."
            //         },
            //         len: {
            //             args: [8, Infinity],
            //             msg: "A senha deve possuir no minimo 8 caracteres."
            //         }
            //     }
        },
        especializacao: {
            type: type.STRING
        },
        cref: {
            type: type.STRING
        }
    })

}