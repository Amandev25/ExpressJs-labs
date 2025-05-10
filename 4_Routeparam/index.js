import express from 'express';
const app = express();
// Route parameters
// Ecom/products/iphone/:iphoneId
app.get('/ecom/products/iphone/:model' , (req,res)=>{
   // res.send("User deleted");
    res.send(req.params.model);
})


app.listen(8000 , ()=> console.log("server up!!"))