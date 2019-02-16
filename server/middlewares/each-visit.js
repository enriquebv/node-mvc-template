module.exports = (request, response, next) => {
  console.info('Index visited at', new Date())
  next()
}