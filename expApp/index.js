// create Folder
// npm init -y
// npm i express
// Create Instanxw exxpress
// provide port : 8000
// Basic Route /
import express from 'express';
const app = express(); // Creating Instance of express....

app.get('/' ,(req,res)=>{
    res.send("welcome to Expressjs Labs");
});

//Listening to the port 8000
app.listen(8000,()=> console.log("server up"))