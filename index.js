const express = require('express');
const app = express();

app.use(express.json());       
app.use(express.urlencoded({extended: true})); 



// send file
app.get('/', (req, res)=> {
    res.sendFile( __dirname + '/index.html');
});


app.post( '/', (req, res)=> {
    const users = {
        username: req.body.username,
        email: req.body.email
    }
    console.log(users);
    res.send('data recieved');
});


app.listen(9000,() => { console.log('http://localhost:9000')});