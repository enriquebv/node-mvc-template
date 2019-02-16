const yamlReader = require('js-yaml')
const fs = require('fs')
const path = require('path')

const middlewaresPath = path.resolve(__dirname, '..', 'middlewares')

const middlwaresPath = path.resolve(__dirname, '..', 'middlewares.yml')
const middlwaresFile = fs.readFileSync(middlwaresPath, 'utf8')
const middlwares = yamlReader.safeLoad(middlwaresFile)

module.exports = app => {
  middlwares.forEach(middleware => {
    const middlewareControllerPath = path.join(middlewaresPath, middleware.controller)
    const middlewareController = require(middlewareControllerPath)

    switch (middleware.method) {
      case 'get':
        app.get(middleware.url, middlewareController)
        break
      case 'post':
        app.post(middleware.url, middlewareController)
        break
    }
  })
}