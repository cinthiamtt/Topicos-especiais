const sequelize = require("../database/db");
const express = require("express");

const adminController = require("../controller/adminController");

module.exports = {
    async teste(req, res, next) {
        console.log("Seu request passou aqui no admin!!")
        next()
    }
}