const express = require('express');
const cors = require('cors');
const appForUser = require('./routes/users');

const app = express();

app.use(cors("*"));
app.use('/users',appForUser);
app.get('',(request,response)=>{
    response.send("Welcome to my website.....");
});


app.listen( 9000,()=>{
    console.log('server started');
})