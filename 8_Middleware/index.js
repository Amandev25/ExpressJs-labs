import express from 'express';
const app = express();

function UserCredentials(req, res, next){
    console.log("Username: (alex)");
    console.log("Email: (alex21@gmail.com)");
    console.log("Password: (alex222333)");
    console.log("age : (18)");
    
}

app.get("/products" , (req, res) => {
    res.json(products);
})