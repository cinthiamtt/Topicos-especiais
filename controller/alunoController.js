const prof = require("../models/alunoModel")

module.exports = {
    async saveAluno(req, res, next) {
        console.log("SEU REQUEST TA AQUI NO CONTROLLER (Aluno) PARÇA!!!");
        console.log(req.body.nome);
        console.log(req.body.cpf);
        console.log(req.body.telefone);
        console.log(req.body.data_nasc);
        next()
    }
}