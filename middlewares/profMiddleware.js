const sequelize = require("../models/db");
const express = require("express");

const profController = require("../controllers/profController");

module.exports = {
    async teste(req, res, next) {
        console.log("Seu request passou aqui mermão!")
        next()
    }
}