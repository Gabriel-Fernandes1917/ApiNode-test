const express = require('express');
import { Router } from 'express';

const app = express();
const router = Router();

app.get('/', (req,res)=>{
    res.json("test node json");
})

app.listen(3300, console.log("rodou"));