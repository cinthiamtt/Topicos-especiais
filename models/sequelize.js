// Import Models
const Sequelize = require('sequelize');

const ProfessorModel = require('./ProfessorModel');
const TurmaModel = require('./TurmaModel');
const AlunoModel = require('./AlunoModel');
const TipoTurmaModel = require('./TipoTurmaModel');
const TipoPlanoModel = require('./TipoPlanoModel');
const AdminModel = require('./AdminModel');


// Conect to DB
const sequelize = new Sequelize('yoguinha', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgresql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

// Sequelize Models to Global Use
const Professor = ProfessorModel(sequelize, Sequelize);
const Turma = TurmaModel(sequelize, Sequelize);
const Aluno = AlunoModel(sequelize, Sequelize);
const TipoTurma = TipoTurmaModel(sequelize, Sequelize);
const TipoPlano = TipoPlanoModel(sequelize, Sequelize);
const Admin = AdminModel(sequelize, Sequelize);


// Relationships
Professor.belongsToMany(Turma, { through: "ProfessorTurma", unique: false })
Turma.belongsTo(TipoTurma)
Turma.belongsTo(Professor)

Aluno.belongsToMany(Turma, { through: "AlunoTurma", unique: false })
Aluno.belongsTo(Turma)


//Syncronize
//sequelize.sync({ force: true }).then(() => { console.log(`-->>Database & tables created!`) })

module.exports = {
    Professor,
    Turma,
    Aluno,
    TipoPlano,
    TipoTurma,
    Admin
}