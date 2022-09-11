const express = require('express');
const app = express();
const port = 8080;

app.listen(port,function(err){
    if(err){
        console.log(`Error while running server`);
    }
    console.log(`Server is running on port : ${port}`);
});

app.get('/testvalue',function(req,res){
res.send('print browser value')
});