"use strict";
const express = require('express')
const app = express()
let Json = {}
const path  = require('path');
const VIEWS = path.join(__dirname);

app.get('/', function(req, res){
  res.sendFile('index.html',{ root : VIEWS })

})
app.get('/:data',(req,res)=>{
  const date = req.params.data
  if(isNaN(date)){
  Json = {
    "unix": new Date(date).getTime() /1000,
    "natural": new Date(date).toDateString()
  }
  res.json(Json)
}else{
  let sectime = date* 1000
  Json = {
    "unix": date,
    "natural": new Date(sectime).toDateString()
  }
  res.json(Json)
}
})
app.listen(process.env.PORT || 3000)
