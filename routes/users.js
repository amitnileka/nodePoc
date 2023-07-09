const express = require('express');
const axios = require('axios');

const appForUser = express.Router();
var data= {} ;
axios("https://reqres.in/api/users")
.then(response=> response.data.data)
.then(response=> data= response);


appForUser.get('/',(request,response)=>{
    response.setHeader('Content-Type','application/json');
    response.send(JSON.stringify(data));
});





module.exports = appForUser;