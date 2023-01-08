const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.json("test node json");
})

app.listen(3300, console.log("rodou"));