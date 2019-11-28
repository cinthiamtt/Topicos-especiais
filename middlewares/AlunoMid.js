const express = require("express");
const AlunoController = require("../controllers/AlunoController");

module.exports = {
    async auth(req, res, next) {
        console.log("MIDDLEWARE aluno <<===")
        next()

    }
}