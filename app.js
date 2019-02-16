require('dotenv').config()

const port = process.env.PORT || 8080

const express = require('express')
const app = express()
const chalk = require('chalk')
const routesLoader = require('./server/lib/routes-loader')
const middlewaresLoader = require('./server/lib/middlewares-loader')

app.use(express.static('statics'))

middlewaresLoader(app)
routesLoader(app)

app.listen(port, () => console.error('%s Server UP in port %d.', chalk.white.bgGreen(' ON '), port))