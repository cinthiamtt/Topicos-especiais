const sequelize = require("../database/db");
const express = require("express");

const profController = require("../controller/profController");

module.exports = {
    async teste(req, res, next) {
        console.log("Seu request passou aqui mermão!")
        next()
    }
}