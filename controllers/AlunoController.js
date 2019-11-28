var { Aluno } = require('../models/sequelize');
var Promise = require('bluebird');
var bcrypt = require('bcrypt');


// Validation
exports.validate = (req, res) => {
    Promise.coroutine(function*() {
        try {
            const { cpf, password } = req.body;

            const aluno = yield Aluno.findOne({ where: { cpf: req.body.cpf } });

            if (!aluno)
                return res.status(400).send({ error: `${cpf} is not a Valid Identifier` })

            if (!bcrypt.compareSync(password, aluno.password))
                return res.status(400).send({ error: 'Invalid Password' })

            res.render('AlunoViews/aluno_home', { aluno })

        } catch (err) {

            res.status(303).send({ error: `erro => ${err}` })

        }
    })();
}


//create
exports.create = (req, res) => {
    Promise.coroutine(function*() {
        var salt = bcrypt.genSaltSync(14);

        var hash = bcrypt.hashSync(req.body.password, salt)

        try {

            req.body.password = hash;

            const aluno = yield Aluno.create(req.body);

            res.render('AlunoViews/aluno_home', { aluno })

        } catch (err) {
            return res.status(400).send({ error: "Failed to Create" });
        }
    })();
}

// ADMIN VIEWS
//read one
exports.read = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var aluno = yield Aluno.findOne({ where: { id: req.params.id } });

            aluno.passwd = undefined;

            return res.send({ aluno })
        } catch (err) {
            return res.status(400).send({ error: "Failed to Read this ID" });
        }
    })();
}


//list all
exports.list = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var aluno = yield Aluno.findAll();

            return res.send({ aluno })
        } catch (err) {
            return res.status(400).send({ error: "Failed to list" });
        }
    })();
}


//update
exports.update = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var UpdatedAluno = yield Aluno.update(
                req.body, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                }
            );

            return res.status(303).send({ success: "All Info Updated" });

        } catch (err) {

            return res.status(400).send({ error: `Failed to Update because: ${err}` });
            console.log(err)
        }
    })();
}


//Delete
exports.delete = (req, res) => {
    Promise.coroutine(function*() {

        try {
            yield Aluno.destroy({
                where: {
                    id: req.params.id
                }
            });
            res.status(303).send({ sucess: "Deletado com Sucesso!" });
        } catch (err) {
            return res.status(400).send({ error: "Failed to Delete" });
        }
    })();
}