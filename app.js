const express = require('express')
const app = express()

//Static fonts
app.use('/fonts', express.static(__dirname + '/src/fonts'))

//Static img
app.use('/img', express.static(__dirname + '/src/img'))

//Static css
app.use('/css', express.static(__dirname + '/src/css'))

//Static pdf files
app.use('/pdf', express.static(__dirname + '/src/pdf'))

//Static javascript
app.use('/js', express.static(__dirname + '/src/js'))

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})

app.listen(8080)
