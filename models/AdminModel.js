module.exports = (sequelize, type) => {
    return sequelize.define('admin', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        passwd: {
            type: type.STRING,
            select: false,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    })
}