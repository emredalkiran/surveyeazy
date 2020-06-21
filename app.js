const express = require('express');

const app = express();


app.get('/test',(req,res)=>{
    res.send("Hello mf!");
});

app.listen(3000, () => {
    console.log('Listening on localhost:3000')
  })