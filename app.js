const express = require('express')
const app = express()

//method-override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//path
const path = require('path')

const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// public/path
app.use(express.static(path.join(__dirname, '/public')));

// Template Engine - handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Models
const { Professor, Turma, Aluno, TipoTurma } = require('./models/sequelize')

const ProfessorRouter = require('./routes/ProfessorRouter')
const TurmaRouter = require('./routes/TurmaRouter')
const TipoTurmaRouter = require('./routes/TipoTurmaRouter')
const AlunoRouter = require('./routes/AlunoRouter')
const indexRouter = require('./routes/indexRouter')

ANY_SECRET = "GL3UT1NG0D"

// Rotas
app.use('/', indexRouter)
app.use('/prof', ProfessorRouter)
app.use('/turma', TurmaRouter)
app.use('/tipoturma', TipoTurmaRouter)
app.use('/aluno', AlunoRouter)


const PORT = process.env.PORT || 8081
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${PORT}`)
})