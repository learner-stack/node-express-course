const express = require('express');
const app = express();

const userData = [
                  {name:'RM'},
                  {name:'Jin' }
                ]

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'succesffuly got the details!',
        users: userData
    })
    //const objData = JSON.parse(userData);
    //console.log(objData);
})

app.listen(8080,function(){
    console.log("server is running");
});