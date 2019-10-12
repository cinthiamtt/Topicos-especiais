const prof = require("../models/profModel")

module.exports = {
    async saveProf(req, res) {
        console.log("SEU REQUEST TA AQUI NO CONTROLLER PARÇA!!!")
        console.log(req.body.nome);
        console.log(req.body.cpf);
        console.log(req.body.telefone);
        console.log(req.body.data_nasc);
    }
}