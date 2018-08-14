const express = require('express')
const app = express()

//Static fonts
app.use('/fonts', express.static(__dirname + '/src/fonts'))

//Static img
app.use('/img', express.static(__dirname + '/src/img'))

//Static css
app.use('/css', express.static(__dirname + '/src/css'))

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})

app.listen(8080)
