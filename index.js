const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({origin: '*',
methods:'*'}))

app.get('',(request,response)=>{
    response.send("Welcome to my page");
});


app.listen( 9000,()=>{
    console.log('server started');
})