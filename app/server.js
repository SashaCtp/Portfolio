const express = require('express')
const path = require('path')
const history = require('connect-history-api-fallback');
const server = express()
const PORT = 80
const HOST = '0.0.0.0'

server.use(history())

server.use('/public' ,express.static(path.resolve(__dirname, 'public')))
server.use('/dist' ,express.static(path.resolve(__dirname, 'dist')))

server.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

server.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'))
})

server.listen(PORT, HOST, () => {
    console.log('✅ Server started on ' + HOST + ':' + PORT)
})