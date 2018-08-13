const express = require('express')
const app = express()

//Static fonts
app.use('/fonts', express.static(__dirname + '/src/fonts'))

//Static img
app.use('/img', express.static(__dirname + '/src/img'))

app.use('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css')
})

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html')

})

app.listen(8080)
