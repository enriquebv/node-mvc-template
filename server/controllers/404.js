module.exports = (request, response, next) => {
  response.status(404).send('custom 404 controller fired')
}