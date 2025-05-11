import express from "express";
const app = express();
import product from "./products.js";

app.get("/getProdects" ,(req,res)=>{
    res.json(product);
});

app.listen(8000 ,()=> {
    console.log("Server is Running on port 8000");
});
