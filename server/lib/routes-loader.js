const yamlReader = require('js-yaml')
const fs = require('fs')
const path = require('path')

const controllersPath = path.resolve(__dirname, '..', 'controllers')
const middlewaresPath = path.resolve(__dirname, '..', 'middlewares')

const routesPath = path.resolve(__dirname, '..', 'routes.yml')
const routesFile = fs.readFileSync(routesPath, 'utf8')
const routes = yamlReader.safeLoad(routesFile)

function createRoute(app, route) {
  const controllerPath = path.join(controllersPath, route.controller)
  const middlewares = route.middlewares || false
  const controller = require(controllerPath)

  if (middlewares) {
    middlewares.forEach(middleware => {
      const middlewareControllerPath = path.join(middlewaresPath, middleware)
      const middlewareController = require(middlewareControllerPath)

      switch (route.method) {
        case 'get':
          app.get(route.url, middlewareController)
          break
        case 'post':
          app.post(route.url, middlewareController)
          break
      }
    })
  }

  switch (route.method) {
    case 'get':
      app.get(route.url, controller)
      break
    case 'post':
      app.post(route.url, controller)
      break
  }
}

module.exports = app => routes.forEach(createRoute.bind(null, app))