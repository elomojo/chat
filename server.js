let http = require('http')

let server = http.createServer()
server.on('request', function(request, response){
    console.log('il y a eu une requête')
    response.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    response.end('Salut çç')
})
server.listen(3000)
