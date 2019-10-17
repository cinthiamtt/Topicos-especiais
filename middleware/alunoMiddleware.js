const sequelize = require("../database/db");
const express = require("express");

const alunoController = require("../controller/alunoController");

module.exports = {
    async teste(req, res, next) {
        console.log("Seu request passou aqui no mid do aluno, mermão!")
        next()
    }
}