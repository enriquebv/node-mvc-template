const yamlReader = require('js-yaml')
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')

const routesPath = path.resolve(__dirname, '..', 'routes.yml')
const controllersPath = path.resolve(__dirname, '..', 'controllers')

const routesFile = fs.readFileSync(routesPath, 'utf8')
const routes = yamlReader.safeLoad(routesFile)

function createRoute(server, route) {
  const controllerPath = path.join(controllersPath, route.controller)
  let controller = {}

  try {
    controller = require(controllerPath)
  } catch (error) {
    console.error(`${chalk.white.bgRed(' ERROR ')} Can't find ${route.controller}. Route will be not created.`)
    return false
  }

  switch (route.method) {
    case 'get':
      server.get(route.url, controller)
      break
    case 'post':
      server.post(route.url, controller)
      break
  }

  server.get('/', (req, res) => res.send('test'))
}

module.exports = server => routes.forEach(createRoute.bind(null, server))