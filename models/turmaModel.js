const db = require('../database/db')

const Turma = db.sequelize.define('turma', {
    qtd_alunos_atual: {
        type: db.Sequelize.INTEGER
    },
    turma_id: {
        type: db.Sequelize.BelongsTo('tipoTurmaModel'),
        required = true
    },
    modalidade_id: {
        type: db.Sequelize.BelongsTo('modalidadeModel'),
        required = true
    },
    data_inicio_aula: {
        type: db.Sequelize.TIME
    },
    data_fim_aula: {
        type: db.Sequelize.TIME
    },
    limite: {
        type: db.Sequelize.INTEGER
    }
})

module.exports = Turma