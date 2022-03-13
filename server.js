const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require("dotenv").config();
require('./db');

const Player = require('./player');

app.post('/regis',(req,res)=>{

})

app.post('/login', (req,res) =>{

})

app.get('/game', (req, res) => {
  
})

app.post('/game', (req,res)=>{
    
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})