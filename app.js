const express = require('express')
const app = express()


/*
    INIT Middleware
*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

//Messages
app.post('/message', (req, res) => {

    res.sendStatus(200);

    if(req.body.name && req.body.email && req.body.message){

        console.log("New message from " + req.body.name);
    
    }

});

//Root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

console.log("🚀 Starting server on port " + PORT)
try{
    app.listen(PORT);

    console.log("\n✅ Server started on port " + PORT)
}catch(e){

    console.log("\n⛔ Server encountered an error. Start sequence aborted.")
    console.error(e.error);

}

