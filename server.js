const express = require('express');
const app = express();
//object form
const userData = [
                  {id:1,name:'RM'},
                  {id:2,name:'Jin'}
                ]

app.get('/users/:id',function(req,res){
    console.log(req.params.id);
    res.json({
        users: req.params.id
    })
    //json form converting
    const objData = JSON.stringify(userData);
    console.log(objData);
})

app.listen(8080,function(){
    console.log("server is running");
});