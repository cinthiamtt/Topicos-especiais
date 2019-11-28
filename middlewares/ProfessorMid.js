const express = require("express");
const ProfessorController = require("../controllers/ProfessorController");

module.exports = {
    async auth(req, res, next) {
        console.log("MIDDLEWARE <<===")
        next()

    }
}