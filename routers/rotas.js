// Rotas
const app = require('./server')

// Index (HOME)
app.get('/', function(req, res) {
    Prof.findAll().then(function(profs) {
        res.render('home', { profs: profs })
    })
})


// Cadastro, metodo GET para ser usado como localhost/cad
app.get('/cadaluno', function(req, res) {
    res.render('form_aluno')
})

// Adicionando Alunos (POST)
app.post('/addaluno', function(req, res) {
    Aluno.create({
        // esses dados vem dos models, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        celular: req.body.celular,
        sexo: req.body.sexo,
        data_nasc: req.body.data_nasc
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

// Cadastro, metodo GET para ser usado como localhost/cad dos models
app.get('/cadprof', function(req, res) {
    res.render('form_prof')
})

// Metodo Post recebendo os dados passados no html form.handlebars dentro do GET acima
app.post('/addprof', function(req, res) {
    Prof.create({
        // esses dados vem dos models, que sao os dados que serão inseridos nele
        nome: req.body.nome,
        cpf: req.body.cpf,
        telefone: req.body.telefone,
        celular: req.body.celular,
        sexo: req.body.sexo,
        data_nasc: req.body.data_nasc
    }).then(function() {
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Houve um erro: " + erro)
    })
})

// Rota para deletar o usuario, nota-se que foi passado um parametro de requisito usando o dois-pontos (:)
app.get('/deletar/:id', function(req, res) {
    // destroy é uma função da biblioteca Aluno(que provem da biblioteca Sequelize)
    Prof.destroy({ where: { 'id': req.params.id } }).then(function() {
        res.send("REMOVIDO COM SUCESSO!")
    }).catch(function(erro) {
        res.send("NAO EXISTE!")
    })
})