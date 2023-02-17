if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index')
const adminRouter = require('./routes/admin')
const gameRouter = require('./routes/game')
const aboutUsRouter = require('./routes/about-us')

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(cookieParser())
app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

app.use('/', indexRouter)
app.use('/admin', adminRouter)
app.use('/game', gameRouter)
app.use('/about-us', aboutUsRouter)

app.listen(process.env.PORT || 3000)

