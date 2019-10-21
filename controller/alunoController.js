const prof = require("../models/alunoModel")

module.exports = {
    async saveAluno(req, res, next) {
        console.log("SEU REQUEST TA AQUI NO CONTROLLER (Aluno) PARÇA!!!")
        next()
    }
}