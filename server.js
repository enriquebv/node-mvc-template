const express = require('express')
const server = express()
const chalk = require('chalk')
const routesLoader = require('./server/routes/routes-loader')

const port = 80

routesLoader(server)

server.listen(port, () => console.error('%s Server UP in port %d.', chalk.white.bgGreen(' ON '), port))