"use strict";
const express = require('express')
const app = express()
let Json = {}
app.use(express.static(__dirname + '/index'))
app.get('/url/:data',(req,res)=>{
  const date = req.params.data
  if(isNaN(date)){
  Json = {
    "unix": new Date(date).getTime(),
    "natural": new Date(date).toString()
  }
  res.json(Json)
}else{
  Json = {
    "unix": date,
    "natural": new Date(date).toString()
  }
  res.json(Json)
}
})
app.listen(3000)
