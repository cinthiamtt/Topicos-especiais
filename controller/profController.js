const prof = require("../models/profModel")

module.exports = {
    async saveProf(req, res, next) {
        console.log("SEU REQUEST TA AQUI NO PROF_CONTROLLER!!!");
        next()
    }
}