import express from "express";
const app = express();

// Query String ? &
 app.get ('/product' , (req, res)=>{
    const {category , price} = req.query;
   res.send(`product Category is ${category} and Price is ${price}`); 
 } );


app.listen(8000, ()=>console.log("Server up!!"));