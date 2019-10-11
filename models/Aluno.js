// Fazendo requisição do arquivo .db(note q n precisa da extensao .js)
// obs.: como esta na mesma pasta, é preciso colocar ./, pois é equivalente ao til (~) no linux
const db = require('./db')

//Criando "classe"
const Aluno = db.sequelize.define('alunos', {
    nome: {
        type: db.Sequelize.STRING
    },
    Cpf: {
        type: db.Sequelize.STRING
    }
})

//Exportando modulo para uso global
module.exports = Aluno

// Caso tiver dando algum erro de "relation "alunos" does not exist", descomente a linha abaixo e comente
// a linha de module.exports acima
// depois, reexecute o nodemon, o erro irá desaparecer, entao, desligue o servidor e retorne o estado de cada
// comentario(Aluno.sync comentado e module.exports nao comentado)


// Aluno.sync({ force: true })