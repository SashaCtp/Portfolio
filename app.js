const express = require('express')
const app = express()


/*
    INIT Middleware
*/
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Static files
app.use('/public', express.static(__dirname + '/src'))

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

