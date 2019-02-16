require('dotenv').config()

const port = process.env.PORT || 8080

const express = require('express')
const app = express()
const chalk = require('chalk')
const routesLoader = require('./server/lib/routes-loader')

routesLoader(app)

app.listen(port, () => console.error('%s Server UP in port %d.', chalk.white.bgGreen(' ON '), port))