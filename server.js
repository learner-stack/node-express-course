const express = require('express');
const app = express();
const bodyParser = require('boyd-parser');
app.use(bodyParser.json());
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
   // console.log(req.params.id.name);
    
})
app.get('/users',function(req,res){
    //object to json converting
    const objData = JSON.stringify(userData);
    console.log(objData);
    res.send(objData)
})
//login form. . . 
app.post('/login',function(req,res){
    const username = req.body.username;
    const pass = req.body.password;

    const mockuser = "learnerstack";
    const mockpass = "1234";
    if(username==mockuser && pass==mockpass){
        res.json({success:true,message:"Logged in",token:'encrypted token goes here'});
    }else{
        res.json({success:false,message:"login failed!"})
    }
})
app.listen(8080,function(){
    console.log("server is running");
});