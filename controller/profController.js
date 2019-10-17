const prof = require("../models/profModel")

module.exports = {
    async saveProf(req, res, next) {
        console.log("SEU REQUEST TA AQUI NO CONTROLLER PARÇA!!!");
        console.log(req.body.nome);
        console.log(req.body.cpf);
        console.log(req.body.telefone);
        console.log(req.body.celular);
        console.log(req.body.sexo);
        console.log(req.body.nome);
        console.log(req.body.data_nasc);
        console.log(req.body.createdat);
        next()
    }
}