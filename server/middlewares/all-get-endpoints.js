module.exports = (request, response, next) => {
  console.info('Middleware all-get-endpoints.js was fired.')
  next()
}