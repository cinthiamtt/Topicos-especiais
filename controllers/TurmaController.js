var { Turma, Professor } = require("../models/sequelize")
var Promise = require("bluebird")


// Create
exports.create = (req, res) => {
    Promise.coroutine(function*() {
        try {

            var turma = yield Turma.create(req.body);

            return res.send({ turma })
        } catch (err) {
            return res.status(400).send({ error: "Registration Failed" });
        }
    })();
}


//List ALL Turmas
exports.list = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var ListTurma = yield Turma.findAll({ where: {} });
            return res.send(ListTurma);
        } catch (err) {
            return res.status(400).send({ error: "Registration Failed" });
        }
    })();
}


// List ALL Turmas Belonging to ONE Professor
exports.read = (req, res) => {
    Promise.coroutine(function*() {
        try {
            let query;
            if (req.params.ProfessorId) {
                query = Turma.findAll({
                    include: [
                        { model: Professor, where: { id: req.params.ProfessorId } }
                    ]
                })
            } else {
                query = Turma.findAll({ include: [Professor] })
            }

            return query.then(turmas => res.json(turmas))
        } catch (err) {
            return res.status(400).send({ error: "There's no data for this Professor" });
        }
    })();
}


// Update
exports.update = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var UpdatedTurma = yield Turma.update(
                req.body, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                }
            );
            return res.status(303).send({ success: "All Info Updated" });
        } catch (err) {
            return res.status(303).send({ error: "Failed to Update" });
        }
    })();
}


//Delete
exports.delete = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var DeletedTurma = yield Turma.destroy({
                where: {
                    'id': req.params.id
                }
            });
            res.status(303).send({ sucess: "Deletado com Sucesso!" });
        } catch (err) {
            return res.status(303).send({ error: "Failed to Delete" });
        }
    })();
}