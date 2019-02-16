module.exports = (request, response) => {
  const basicLayout = `
  <!DOCTYPE html>
  <html>
    <head>
      <title>Title of the document</title>
    </head>
      <body>
        <h1>node-mvc-template</h1>
    </body>
  </html>
  
  `
  response.status(200).send(basicLayout)
}