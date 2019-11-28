var { TipoTurma } = require('../models/sequelize');
var Promise = require('bluebird');


//Create
exports.create = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var tipo_turma = yield TipoTurma.create(req.body);

            return res.send({ tipo_turma })
        } catch (err) {
            res.status(400).send({ error: "Failed to Create" });
        }
    })();
}


// Informações de 1 só
exports.read = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var OneTipoTurma = yield TipoTurma.findOne({ where: { id: req.params.id } });

            return res.send({ OneTipoTurma })
        } catch (err) {
            res.status(400).send({ error: "Failed to Read this ID" });
        }
    })();
}


//Listar Todos
exports.list = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var ListTipoTurma = yield TipoTurma.findAll({ where: {} });
            return res.send(ListTipoTurma);
        } catch (err) {
            res.status(400).send({ error: "Failed to List" });
        }
    })();
}


//Delete
exports.delete = (req, res) => {
    Promise.coroutine(function*() {
        try {
            yield TipoTurma.destroy({
                where: {
                    'id': req.params.id
                }
            });
            res.status(303).send({ sucess: "Deletado com Sucesso!" });
        } catch (err) {
            res.status(400).send({ error: "Failed to Delete" });
        }
    })();
}


//Update
exports.update = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var UpdatedTipoTurma = yield TipoTurma.update(
                req.body, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                }
            );
            return res.status(303).send({ success: "All Info Updated" });
        } catch (err) {
            res.status(400).send({ error: "Failed to Update" });
        }
    })();
}