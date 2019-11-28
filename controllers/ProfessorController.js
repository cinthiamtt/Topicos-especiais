var { Professor } = require('../models/sequelize');
var Promise = require('bluebird');
var bcrypt = require('bcrypt');


// Validation
exports.validate = (req, res) => {
    Promise.coroutine(function*() {

        console.log("REQUEST ========>>>>> CONTROLLER --> VALIDATE")

        try {
            const { cpf, password } = req.body;

            const prof = yield Professor.findOne({ where: { cpf: req.body.cpf } });

            if (!prof)
                return res.status(400).send({ error: `${cpf} is not a Valid Identifier` })

            if (!bcrypt.compareSync(password, prof.password))
                return res.status(400).send({ error: 'Invalid Password' })

            res.render('ProfessorViews/prof_home', { prof })

        } catch (err) {

            res.status(303).send({ error: `erro => ${err}` })

        }
    })();
}



//Create
exports.create = (req, res) => {
    Promise.coroutine(function*() {

        console.log("REQUEST ========>>>>> CONTROLLER do CREATE!!!!")

        var salt = bcrypt.genSaltSync(14);

        var hash = bcrypt.hashSync(req.body.password, salt)

        try {

            req.body.password = hash;

            const prof = yield Professor.create(req.body)

            res.render('ProfessorViews/prof_home', { prof })

        } catch (err) {
            return res.status(400).send({ error: `Registration Failed because: ${err}` });
        }
    })();
};

// ADMIN VIEWS
// Informações de 1 só
exports.read = (req, res) => {
    Promise.coroutine(function*() {
        try {
            var prof = yield Professor.findOne({ where: { id: req.params.id } });

            return res.send({ prof })
        } catch (err) {
            return res.status(400).send({ error: `Failed to Read that Professor because ${err}` })
        }
    })();
}


//Listar Todos
exports.list = (req, res) => {

    Promise.coroutine(function*() {
        try {
            var prof = yield Professor.findAll();

            return res.send({ prof })
        } catch (err) {
            return res.status(400).send({ error: `List Error because ${err}` })
        }
    })();
};


//Delete
exports.delete = (req, res) => {
    Promise.coroutine(function*() {

        console.log("REQUEST ========>>>>> CONTROLLER do DELETE PROFESSOR")
        try {

            const DeletedProf = yield Professor.destroy({
                where: {
                    'id': req.params.id
                }
            });

            if (!DeletedProf)
                return res.status(303).send({ error: `Não existe Esse usuário.` })

            res.status(303).send({ sucess: `Deletado com Sucesso!` });

        } catch (err) {
            return res.status(400).send({ error: `Failed to Delete because: ${err}` });
        }
    })();
};


//Update
exports.update = (req, res) => {
    Promise.coroutine(function*() {
        console.log("REQUEST ========>>>>> CONTROLLER UPDATE PROFESSOR...")
        try {

            var UpdatedProf = yield Professor.update(
                req.body, {
                    where: {
                        'id': req.params.id
                    },
                    returning: true
                }
            );

            return res.status(303).send({ success: `All Info Updated` });


        } catch (err) {
            return res.status(400).send({ error: `Failed to Update because ${err}` });
        }
    })();
}